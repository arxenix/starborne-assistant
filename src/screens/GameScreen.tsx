import * as React from "react";
import {List, ActivityIndicator, Button, Text, TextInput, Theme, withTheme} from 'react-native-paper';
import {Dimensions, StyleSheet, View} from "react-native";
import {Game, JoinInfo, State as GamesListState} from "../redux/reducers/GamesListReducer";
import {connect} from "react-redux";
import {
    enterGame,
    establishGameConnection,
    fetchGamesList,
    joinEstablishAndEnterGame,
    joinGameServer
} from "../redux/actions/GamesListActions";
import {HubConnection} from "@microsoft/signalr";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GameDrawerContent } from "../components/GameDrawerContent";
import GameDetailsScreen from "./GameDetailsScreen";
import {Header} from "../components/Header";

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
    joinEstablishAndEnterGame(gameId: number): Promise<HubConnection>;
}

interface State {
    refreshing: boolean;
}

class GameScreen extends React.Component<Props, State> {

    async componentDidMount() {
        await this.props.joinEstablishAndEnterGame(this.props.game.Id);
    }

    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
        return (this.props.game.EnteredGame !== nextProps.game.EnteredGame) ||
            (this.props.game.GameState !== nextProps.game.GameState);
    }

    render() {
        if (this.props.game.EnteredGame)
        return (
            <Drawer.Navigator
                initialRouteName="GameDetails"
                drawerContent={() => <GameDrawerContent />}
                edgeWidth={Dimensions.get("window").width}
            >
                <Drawer.Screen name="GameDetails" component={GameDetailsScreen} initialParams={{gameId: this.props.game.Id}}/>
                <Drawer.Screen name="GameNotifications" component={GameDetailsScreen} initialParams={{gameId: this.props.game.Id}}/>
            </Drawer.Navigator>
        );
        else return (<ActivityIndicator animating/>);
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    const gameId = ownProps.route.params.gameId;
    return {game: state.gamesList.Games[gameId.toString()]};
};

export default withTheme(connect(mapStateToProps, {joinEstablishAndEnterGame})(GameScreen));