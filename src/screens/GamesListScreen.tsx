import * as React from "react";
import {List, ActivityIndicator, Text, Theme, withTheme, Headline} from 'react-native-paper';
import {RefreshControl, ScrollView, StyleSheet} from "react-native";
import {Game, State as GamesListState} from "../redux/reducers/GamesListReducer";
import {connect} from "react-redux";
import GameCard from "../components/GameCard";
import {fetchGamesList} from "../redux/actions/GamesListActions";
import {StackNavigationProp} from "@react-navigation/stack";
import {SafeAreaView} from "react-native-safe-area-context";
import {RootState} from "../redux/reducers";
import {ErrorComponent} from "../components/ErrorComponent";

interface Props extends GamesListState {
    navigation: StackNavigationProp<any>;
    theme: Theme;
    fetchGamesList(): Promise<void>;
}

interface State {
    refreshing: boolean;
}

class GamesListScreen extends React.Component<Props, State> {
    readonly state: State = {
        refreshing: false,
    };

    async componentDidMount() {
        await this.props.fetchGamesList();
    }

    handleRefreshGames = async () => {
        this.setState({refreshing: true});
        await this.props.fetchGamesList();
        this.setState({refreshing: false})
    };


    handleGamePress = async (game: Game) => {
        console.log(`Pressed game button! ${game.Name}`);
        this.props.navigation.navigate('GameNavigator', {
            gameId: game.Id
        });
    };

    render() {
        const joinedServers = [];
        const unjoinedServers = [];
        if (this.props.Games !== undefined) {
            for (const game of Object.values(this.props.Games)) {
                if (game.HasRequestingPlayer)
                    joinedServers.push(game);
                else
                    unjoinedServers.push(game);
            }
        }

        return (
            <SafeAreaView style={styles.container}>
                <Headline style={{alignSelf:"center"}}><Text>Games List</Text></Headline>
                <ScrollView
                            refreshControl={
                                <RefreshControl refreshing={this.state.refreshing}
                                                onRefresh={this.handleRefreshGames}/>
                            }
                >
                    {(this.props.Games === undefined) && (this.props.GamesError !== undefined) &&
                    <ActivityIndicator animating/>}

                    <ErrorComponent error={this.props.GamesError}/>

                    {(this.props.Games) && Object.values(this.props.Games).map(game =>
                    <ErrorComponent key={game.Id} error={game.ConnectionError}/>)}

                    <List.Section title="Joined Games">
                        {joinedServers.map(game =>
                            <GameCard key={game.Id} game={game} handleGamePress={this.handleGamePress}/>
                        )}
                    </List.Section>
                    <List.Section title="Other Games">
                        {unjoinedServers.map(game =>
                            <GameCard key={game.Id} game={game} handleGamePress={this.handleGamePress}/>
                        )}
                    </List.Section>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});


const mapStateToProps = (state: RootState) => {
    return {...state.gamesList};
};

export default withTheme(connect(mapStateToProps, {fetchGamesList})(GamesListScreen));