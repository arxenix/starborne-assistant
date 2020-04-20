import * as React from "react";
import {ActivityIndicator, DarkTheme as PaperDarkTheme, Provider as PaperProvider} from 'react-native-paper';
import LoginScreen from "./src/screens/LoginScreen";
import {Provider} from "react-redux";
import {store, persistor} from "./src/redux/store"
import {PersistGate} from "redux-persist/integration/react";
import {NavigationContainer, DarkTheme, NavigationContainerRef} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import GamesListScreen from "./src/screens/GamesListScreen";
import GameScreen from "./src/screens/GameScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import setupBackgroundTask from "./src/utils/fetcher";

const Stack = createStackNavigator();
const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params: any) {
    navigationRef.current?.navigate(name, params);
}

setupBackgroundTask();

export default function Main() {
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor} loading={<ActivityIndicator animating={true}/>}>
              <PaperProvider theme={PaperDarkTheme}>
                  <SafeAreaProvider>
                      <NavigationContainer theme={DarkTheme} ref={navigationRef}>
                          <Stack.Navigator
                              initialRouteName="Login"
                              headerMode="none"
                          >
                              <Stack.Screen
                                  name="Login"
                                  component={LoginScreen}
                              />
                              <Stack.Screen
                                  name="GamesList"
                                  options={{title: "Games List"}}
                                  component={GamesListScreen}
                              />
                              <Stack.Screen
                                  name="GameScreen"
                                  options={{title: "Game Details"}}
                                  component={GameScreen}
                              />
                          </Stack.Navigator>
                      </NavigationContainer>
                  </SafeAreaProvider>
              </PaperProvider>
          </PersistGate>
      </Provider>
  );
}
