import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
// import MainScreen from "./app/screens/MainScreen";

//https://coolors.co/ef476f-ffd166-06d6a0-118ab2-073b4c
//https://docs.expo.dev/guides/using-custom-fonts/
//https://stackoverflow.com/questions/64509174/react-native-paper-theme-wont-use-custom-fonts
// https://docs.expo.dev/guides/icons/
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <MainScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
  },
});
