import * as React from "react";
import {Appbar, Avatar, IconButton, Text} from "react-native-paper";
import { TouchableOpacity } from "react-native";
import {StackHeaderProps} from "@react-navigation/stack";


export const Header = ({ scene, previous, navigation }: StackHeaderProps) => {
    const { options } = scene.descriptor;
    const title =
        options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
            ? options.title
            : scene.route.name;

    return (
        <Appbar.Header>
            {previous &&
            <Appbar.BackAction
                onPress={() => navigation.pop()}
            />}
            <Appbar.Content
                title={title}
            />
            <Appbar.Action
                icon="logout"
                onPress={/* TODO - proper logout... */ () => navigation.navigate("Login")}
            />
        </Appbar.Header>
    );
};