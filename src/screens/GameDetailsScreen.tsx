import * as React from "react";
import {ActivityIndicator, Appbar, Text, Theme, withTheme, ProgressBar} from 'react-native-paper';
import {StyleSheet, View} from "react-native";
import {Game} from "../redux/reducers/GameReducer";
import {connect} from "react-redux";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import {Header} from "../components/Header";
import {getGameProgress} from "../utils/utils";

interface Props {
    route: any;
    navigation: DrawerNavigationProp<any>;
    theme: Theme;
    game: Game;
}

class GameDetailsScreen extends React.Component<Props, {}> {
    render() {
        let content = <ActivityIndicator animating/>;
        if (this.props.game.EnteredGame) {
            const [daysIn, totalDays] = getGameProgress(new Date(this.props.game.DateStarted), new Date(this.props.game.DateEnding));
            content = <>
                <Text>GameId: {this.props.game.Id}</Text>
                <Text>Name: {this.props.game.Name}</Text>
                <Text>Day: {daysIn}/{totalDays}</Text>
                <ProgressBar progress={daysIn/totalDays}/>
                <Text>EmpireId: {this.props.game.GameInfo!.myEmpireId}</Text>
            </>
        }
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} title="Game Overview"/>
                {content}
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

export default withTheme(connect(mapStateToProps)(GameDetailsScreen));