import * as React from "react";
import {DarkTheme, NavigationContainer, NavigationContainerRef} from "@react-navigation/native";
const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params: any) {
    navigationRef.current?.navigate(name, params);
}

export default function(props: any, state: any) {
    return <NavigationContainer theme={DarkTheme} ref={navigationRef}>
        {props.children}
    </NavigationContainer>
}
