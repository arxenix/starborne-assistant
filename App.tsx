import * as React from "react";
import {ActivityIndicator, DarkTheme as PaperDarkTheme, Provider as PaperProvider} from 'react-native-paper';
import LoginScreen from "./src/screens/LoginScreen";
import {Provider} from "react-redux";
import {store, persistor} from "./src/redux/store"
import {PersistGate} from "redux-persist/integration/react";
import {NavigationContainer, DarkTheme} from "@react-navigation/native";
import { createStackNavigator, StackHeaderProps } from '@react-navigation/stack';
import GamesListScreen from "./src/screens/GamesListScreen";
import GameScreen from "./src/screens/GameScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();


export default function Main() {
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor} loading={<ActivityIndicator animating={true}/>}>
              <PaperProvider theme={PaperDarkTheme}>
                  <SafeAreaProvider>
                      <NavigationContainer theme={DarkTheme}>
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
