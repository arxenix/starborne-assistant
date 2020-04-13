import * as React from "react";
import {ActivityIndicator, Text, Theme, withTheme} from 'react-native-paper';
import {StyleSheet, View} from "react-native";
import {Game} from "../redux/reducers/GamesListReducer";
import {connect} from "react-redux";

interface Props {
    route: any;
    theme: Theme;
    game: Game;
}

class GameDetailsScreen extends React.Component<Props, {}> {
    render() {
        if (this.props.game.EnteredGame)
        return (
            <View style={styles.container}>
                <Text>GameId: {this.props.game.Id}</Text>
                <Text>Name: {this.props.game.Name}</Text>
                <Text>Day: {this.props.game.DateStarted} / {this.props.game.DateEnding}</Text>
            </View>
        );
        else return (<ActivityIndicator animating/>);
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

export default withTheme(connect(mapStateToProps)(GameDetailsScreen));