import * as React from "react";
import {ActivityIndicator, Text, Theme, withTheme} from 'react-native-paper';
import {RefreshControl, ScrollView, StyleSheet, View} from "react-native";
import {Game} from "../redux/reducers/GameReducer";
import {connect} from "react-redux";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import {Header} from "../components/Header";
import {fetchStations} from "../redux/actions/GamesListActions";
import { StationComponent } from "../components/StationComponent";
import {ErrorComponent} from "../components/ErrorComponent";
import {Station} from "../models/Station";

interface Props {
    route: any;
    navigation: DrawerNavigationProp<any>;
    theme: Theme;
    game: Game;
    fetchStations(gameId: number): Promise<void>;
}

interface State {
    refreshing: boolean;
}

class StationsScreen extends React.Component<Props, State> {
    readonly state: State = {
        refreshing: false,
    };

    async componentDidMount() {
        await this.props.fetchStations(this.props.game.Id);
    }

    handleRefresh = async () => {
        this.setState({refreshing: true});
        await this.props.fetchStations(this.props.game.Id);
        this.setState({refreshing: false})
    };

    render() {
        let myStations: Station[] = [];
        if (this.props.game.Stations !== undefined) {
            myStations = this.props.game.Stations.filter(s => s.EmpireId === this.props.game.GameInfo!.myEmpireId);
        }
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} title="Stations"/>
                {(this.props.game.Stations===undefined) &&
                <ActivityIndicator animating/>}

                {(this.props.game.Stations===undefined) &&
                <Text>Stations can take up to 30 seconds to load...</Text>}

                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={this.state.refreshing}
                                        onRefresh={this.handleRefresh}/>
                    }
                >
                    <ErrorComponent error={this.props.game.StationsError}/>
                    {myStations.map(station =>
                        <StationComponent key={station.Id} station={station}/>
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

export default withTheme(connect(mapStateToProps, {fetchStations})(StationsScreen));
