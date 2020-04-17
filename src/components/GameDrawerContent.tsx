import * as React from "react";
import {StyleSheet, View} from "react-native";
import {Drawer, Title} from "react-native-paper";
import {DrawerContentComponentProps, DrawerContentScrollView} from "@react-navigation/drawer";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Game} from "../redux/reducers/GamesListReducer";


interface Props {
    activeItemKey: string;
    navigation: DrawerContentComponentProps<any>;
    game: Game;
}

class GameDrawerContent extends React.Component<Props, {}> {
    render() {
        return (
            <DrawerContentScrollView {...this.props}>
                <View style={styles.drawerContent}>
                    <Title style={styles.title}>{this.props.game.Name}</Title>
                    <Drawer.Item
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons name="book" color={color} size={size}/>
                        )}
                        label="Overview"
                        active={this.props.activeItemKey==="GameDetails"}
                        onPress={() => this.props.navigation.navigate("GameDetails")}
                    />
                    <Drawer.Item
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons name="bell" color={color} size={size}/>
                        )}
                        label="Notifications"
                        active={this.props.activeItemKey==="GameNotifications"}
                        onPress={() => this.props.navigation.navigate("GameNotifications")}
                    />
                    <Drawer.Item
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons name="message-bulleted" color={color} size={size}/>
                        )}
                        label="Messages"
                        active={this.props.activeItemKey==="GameMessages"}
                        onPress={() => {}}
                    />
                    <Drawer.Item
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons name="rocket" color={color} size={size}/>
                        )}
                        label="Station Manager"
                        active={this.props.activeItemKey==="GameStations"}
                        //onPress={() => this.props.navigation.navigate("GameStations")}
                        onPress={() => {}}
                    />
                    <Drawer.Item
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons name="chat" color={color} size={size}/>
                        )}
                        label="Chat"
                        active={this.props.activeItemKey==="GameChat"}
                        onPress={() => {}}
                    />
                    <Drawer.Item
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons name="account-group" color={color} size={size}/>
                        )}
                        label="Alliance Manager"
                        active={this.props.activeItemKey==="GameAlliance"}
                        onPress={() => {}}
                    />
                </View>
            </DrawerContentScrollView>
        );
    }
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});


export default GameDrawerContent;
