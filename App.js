import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignUp2 from "./app/screens/SignUp2";
import WelcomeScreen from "./app/screens/WelcomeScreen";
export default function App() {
  return <SignUp2 />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
