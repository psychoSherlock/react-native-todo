import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MainScreen from "./app/screens/MainScreen";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Header from "./app/screens/Header";
import { useFonts } from "@expo-google-fonts/inter";

//https://coolors.co/ef476f-ffd166-06d6a0-118ab2-073b4c
//https://docs.expo.dev/guides/using-custom-fonts/
//https://stackoverflow.com/questions/64509174/react-native-paper-theme-wont-use-custom-fonts
export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins: require("./app/assets/fonts/Poppins-Regular.ttf"),
    "Fira-Code": require("./app/assets/fonts/FiraCode.ttf"),
  });
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "#ef476f",
      accent: "#ffd166",
    },
    fonts: {
      ...DefaultTheme.fonts,
      regular: {
        fontFamily: "Fira-Code",
        fontWeight: "normal",
      },
      medium: {
        fontFamily: "Poppins",
        fontWeight: "normal",
      },
    },
  };

  return (
    <PaperProvider theme={theme}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <Header />
        <MainScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
