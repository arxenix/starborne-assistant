import * as React from "react";
import {Appbar} from "react-native-paper";
import {DrawerNavigationProp} from "@react-navigation/drawer";

interface Props {
    navigation: DrawerNavigationProp<any>;
    title: string;
}

export const Header = (props: Props) => {
    return (
        <Appbar.Header>
            <Appbar.Action
                icon="menu"
                onPress={/* TODO - proper logout... */ () =>
                    props.navigation.openDrawer()
                }
            />
            <Appbar.Content
                title={props.title}
            />
            <Appbar.Action
                icon="logout"
                onPress={/* TODO - proper logout... */ () =>
                    props.navigation.navigate("Login")
                }
            />
        </Appbar.Header>
    );
};