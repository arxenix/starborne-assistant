import * as React from "react";
import {Subheading, Switch, Theme, Title, withTheme} from 'react-native-paper';
import {ScrollView, StyleSheet, View} from "react-native";
import {Game, GameSettings} from "../redux/reducers/GamesListReducer";
import {connect} from "react-redux";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import {Header} from "../components/Header";
import {PersistentNotificationType} from "../models/PersistentNotificationType";
import {cleanNotificationType} from "../utils/notifications";
import {setNotificationsEnabled, setNotificationTypeEnabled} from "../redux/actions/GamesListActions";

interface Props {
    route: any;
    navigation: DrawerNavigationProp<any>;
    theme: Theme;
    game: Game;
    gameSettings: GameSettings;
    setNotificationsEnabled(gameId: number, enabled: boolean): Promise<void>
    setNotificationTypeEnabled(gameId: number, notificationType: string, enabled: boolean): Promise<void>
}

interface State {
}

class NotificationSettingsScreen extends React.Component<Props, State> {
    readonly state: State = {
    };

    handleToggle = async (enabled: boolean) => {
        await this.props.setNotificationsEnabled(this.props.game.Id, enabled);
    };

    handleToggleType = async (type: string, enabled: boolean) => {
        await this.props.setNotificationTypeEnabled(this.props.game.Id, type, enabled);
    };

    render() {
        let notifList = Object.values(PersistentNotificationType);
        const blackList = [
            PersistentNotificationType.PersistentNotification,
            PersistentNotificationType.PinnedNotification,
            PersistentNotificationType.CachePersistentNotification
        ];
        notifList = notifList.filter(n => blackList.indexOf(n) === -1);

        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} title="Notifications Settings"/>
                <ScrollView>
                    <View style={{...styles.notificationToggle, marginBottom: 10}}>
                        <Title style={{width: "80%"}}>Server Notifications Enabled</Title>
                        <Switch
                            onValueChange={(v) => this.handleToggle(v)}
                            value={this.props.gameSettings.notificationsEnabled}
                        />
                    </View>

                    {notifList.map((t, idx) =>
                        <View style={styles.notificationToggle} key={idx}>
                            <Subheading style={{width: "80%"}}>{cleanNotificationType(t)}</Subheading>
                            <Switch
                                disabled={!this.props.gameSettings.notificationsEnabled}
                                onValueChange={(v) => this.handleToggleType(t, v)}
                                value={!this.props.gameSettings.disabledNotificationTypes.includes(t)}
                            />
                        </View>
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
    notificationToggle: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start"
    }
});


const mapStateToProps = (state: any, ownProps: any) => {
    const gameId = ownProps.route.params.gameId;
    return {
        game: state.gamesList.Games[gameId.toString()],
        gameSettings: state.gamesList.GamesSettings[gameId.toString()]
    };
};

export default withTheme(connect(mapStateToProps, {setNotificationsEnabled, setNotificationTypeEnabled})(NotificationSettingsScreen));
