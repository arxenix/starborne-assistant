import * as React from "react";
import {ActivityIndicator, Appbar, Text, Theme, withTheme} from 'react-native-paper';
import {StyleSheet, View} from "react-native";
import {Game} from "../redux/reducers/GamesListReducer";
import {connect} from "react-redux";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import {Header} from "../components/Header";

interface Props {
    route: any;
    navigation: DrawerNavigationProp<any>;
    theme: Theme;
    game: Game;
}

class GameNotificationsScreen extends React.Component<Props, {}> {
    render() {
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} title="Notifications"/>
                <Text>Notifications :)</Text>
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

export default withTheme(connect(mapStateToProps)(GameNotificationsScreen));
