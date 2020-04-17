import * as React from "react";
import {ActivityIndicator, Theme, withTheme} from 'react-native-paper';
import {RefreshControl, ScrollView, StyleSheet, View} from "react-native";
import {Game} from "../redux/reducers/GamesListReducer";
import {connect} from "react-redux";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import {Header} from "../components/Header";
import {fetchStations} from "../redux/actions/GamesListActions";
import { StationComponent } from "../components/StationComponent";
import {ErrorComponent} from "../components/ErrorComponent";

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

class GameStationsScreen extends React.Component<Props, State> {
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
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} title="Stations"/>
                {(this.props.game.Stations===undefined) &&
                <ActivityIndicator animating/>}
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={this.state.refreshing}
                                        onRefresh={this.handleRefresh}/>
                    }
                >
                    <ErrorComponent error={this.props.game.StationsError}/>
                    {this.props.game.Stations?.map(station =>
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

export default withTheme(connect(mapStateToProps, {fetchStations})(GameStationsScreen));
