import * as React from "react";
import {ActivityIndicator, DataTable, Text, Theme, withTheme} from 'react-native-paper';
import {ScrollView, StyleSheet} from "react-native";
import {Game} from "../redux/reducers/GamesListReducer";
import {connect} from "react-redux";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import {Header} from "../components/Header";
import {fetchNotifications} from "../redux/actions/GamesListActions";
import {PersistentNotification, PersistentNotificationCategory} from "../models/notifications";
import moment from "moment";

interface Props {
    route: any;
    navigation: DrawerNavigationProp<any>;
    theme: Theme;
    game: Game;
    fetchNotifications(gameId: number): Promise<void>;
}

function createDataTable(notif: PersistentNotification) {
    const attrs: [string, string][] = [];

    for(const [key, valUnk] of Object.entries(notif as any)) {
        const val = valUnk as any;
        if (key==="category") {
            attrs.push([key, PersistentNotificationCategory[val]]);
        }
        else if (key==="$type") {
            let typeStr = val.split(",")[0].split(".").slice(-1)[0];
            typeStr = typeStr.replace("Notification", "");
            attrs.push([key, typeStr]);
        }
        else if (key==="dateCreated") {
            attrs.push([key, moment(new Date(val)).fromNow()])
        }
        else if (val.hasOwnProperty("$type")){
            if (val["$type"] === "HexIndex") {
                attrs.push([key, `[${val.q}, ${val.r}]`])
            }
            else {
                attrs.push([key, JSON.stringify(val)])
            }
        }
        else if (["id", "empireId"].indexOf(key) === -1) {
            attrs.push([key, JSON.stringify(val)])
        }
    }

    return (
        <DataTable key={notif.id} style={{paddingBottom: 10}}>
            <DataTable.Header>
                <DataTable.Title>Attribute</DataTable.Title>
                <DataTable.Title>Value</DataTable.Title>
            </DataTable.Header>
            {attrs.map((kvPair, idx) =>
                <DataTable.Row key={idx}>
                    <DataTable.Cell>{kvPair[0]}</DataTable.Cell>
                    <DataTable.Cell>{kvPair[1]}</DataTable.Cell>
                </DataTable.Row>
            )}
        </DataTable>
    );
}

class GameNotificationsScreen extends React.Component<Props, {}> {
    async componentDidMount() {
        await this.props.fetchNotifications(this.props.game.Id);
    }

    render() {
        if (this.props.game.Notifications) {
            this.props.game.Notifications.sort((a, b) =>
            {
                return new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime();
            })
        }
        return (
            <ScrollView style={styles.container}>
                <Header navigation={this.props.navigation} title="Notifications"/>
                {!this.props.game.Notifications && <ActivityIndicator animating/>}
                {this.props.game.Notifications?.map(notif =>
                    createDataTable(notif)
                )}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});


const mapStateToProps = (state: any, ownProps: any) => {
    const gameId = ownProps.route.params.gameId;
    return {game: state.gamesList.Games[gameId.toString()]};
};

export default withTheme(connect(mapStateToProps, {fetchNotifications})(GameNotificationsScreen));
