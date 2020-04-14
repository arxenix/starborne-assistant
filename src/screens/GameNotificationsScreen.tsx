import * as React from "react";
import {ActivityIndicator, DataTable, Text, Theme, withTheme} from 'react-native-paper';
import {RefreshControl, ScrollView, StyleSheet, View} from "react-native";
import {Game} from "../redux/reducers/GamesListReducer";
import {connect} from "react-redux";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import {Header} from "../components/Header";
import {fetchNotifications} from "../redux/actions/GamesListActions";
import {Notification} from "../components/Notification";
import {sortNotificationsByMostRecent} from "../utils/notifications";

interface Props {
    route: any;
    navigation: DrawerNavigationProp<any>;
    theme: Theme;
    game: Game;
    fetchNotifications(gameId: number): Promise<void>;
}

interface State {
    refreshing: boolean;
}

class GameNotificationsScreen extends React.Component<Props, State> {
    readonly state: State = {
        refreshing: false,
    };

    async componentDidMount() {
        await this.props.fetchNotifications(this.props.game.Id);
    }

    handleRefreshGames = async () => {
        this.setState({refreshing: true});
        await this.props.fetchNotifications(this.props.game.Id);
        this.setState({refreshing: false})
    };

    render() {
        if (this.props.game.Notifications) {
            sortNotificationsByMostRecent(this.props.game.Notifications);
        }
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} title="Notifications"/>
                {(this.props.game.Notifications===undefined) &&
                <ActivityIndicator animating/>}


                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={this.state.refreshing}
                                        onRefresh={this.handleRefreshGames}/>
                    }
                >
                    {this.props.game.Notifications?.map(notif =>
                        <Notification key={notif.id} notification={notif}/>
                    )}
                </ScrollView>
            </View>
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
