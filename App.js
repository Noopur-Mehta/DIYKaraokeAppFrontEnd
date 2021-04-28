import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import SignIn from "./app/screens/SignIn";
import SignUp from "./app/screens/SignUp";
import SignUp1 from "./app/screens/SignUp1";
import SignUp2 from "./app/screens/SignUp2";
import SignUp3 from "./app/screens/SignUp3";
import { render } from "react-dom";
import { StackRouter } from "react-navigation";
import SearchSongs from "./app/screens/SearchSongs";

const AppNavigator = createStackNavigator(); //

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator.Navigator initialRouteName="WelcomeScreen">
        <AppNavigator.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ title: "Welcome" }}
        />
        <AppNavigator.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: "Login" }}
        />
        <AppNavigator.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "SignUp" }}
        />
        <AppNavigator.Screen
          name="SignUp1"
          component={SignUp1}
          options={{ title: "SignUp1",
          }}
        />
        <AppNavigator.Screen
          name="SignUp2"
          component={SignUp2}
          options={{ title: "SignUp2" }}
        />
        <AppNavigator.Screen
          name="SignUp3"
          component={SignUp3}
          options={{ title: "SignUp" }}
        />
        <AppNavigator.Screen
        name="SearchSongs"
        component={SearchSongs}
        options={{title:"SearchSongs"}}
        />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
}

