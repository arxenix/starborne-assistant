import * as React from "react";
import {ActivityIndicator, Theme, withTheme} from 'react-native-paper';
import {Dimensions} from "react-native";
import {Game} from "../redux/reducers/GamesListReducer";
import {connect} from "react-redux";
import {joinEstablishAndEnterGame} from "../redux/actions/GamesListActions";
import {HubConnection} from "@microsoft/signalr";
import {createDrawerNavigator, DrawerContentComponentProps} from '@react-navigation/drawer';
import GameDrawerContent from "../components/GameDrawerContent";
import GameDetailsScreen from "./GameDetailsScreen";
import {SafeAreaView} from "react-native-safe-area-context";
import GameNotificationsScreen from "./GameNotificationsScreen";
import GameStationsScreen from "./GameStationsScreen";

const Drawer = createDrawerNavigator();


/*
subviews:
- stations
- chat
- alliance
- notifications
-
 */

interface Props {
    route: any;
    theme: Theme;
    game: Game;
    joinEstablishAndEnterGame(gameId: number): Promise<void>;
}

interface State {
    refreshing: boolean;
}

class GameScreen extends React.Component<Props, State> {

    async componentDidMount() {
        await this.props.joinEstablishAndEnterGame(this.props.game.Id);
    }

    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
        return (this.props.game.EnteredGame !== nextProps.game.EnteredGame);
    }

    render() {
        if (this.props.game.EnteredGame)
        return (
            <Drawer.Navigator
                initialRouteName="GameDetails"
                drawerContent={(props: DrawerContentComponentProps) => <GameDrawerContent navigation={props.navigation} activeItemKey={props.state.routes[props.state.index].name} game={this.props.game}/>}
                edgeWidth={Dimensions.get("window").width * 0.4}
            >
                <Drawer.Screen name="GameDetails" component={GameDetailsScreen} initialParams={{gameId: this.props.game.Id}}/>
                <Drawer.Screen name="GameNotifications" component={GameNotificationsScreen} initialParams={{gameId: this.props.game.Id}}/>
                <Drawer.Screen name="GameStations" component={GameStationsScreen} initialParams={{gameId: this.props.game.Id}}/>
            </Drawer.Navigator>
        );
        else return (
            <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator animating size="large"/>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    const gameId = ownProps.route.params.gameId;
    return {game: state.gamesList.Games[gameId.toString()]};
};

export default withTheme(connect(mapStateToProps, {joinEstablishAndEnterGame})(GameScreen));