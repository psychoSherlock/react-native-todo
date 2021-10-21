import React from "react";
import { Appbar } from "react-native-paper";
import { SafeAreaView, StyleSheet, View } from "react-native";
import colors from "./config/colors";

import AppLoading from "expo-app-loading";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { useFonts } from "@expo-google-fonts/inter";

function Header(props) {
  let [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins.ttf"),
    OpenSans: require("../assets/fonts/OpenSans.ttf"),
  });
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.mainRed,
    },
    fonts: {
      ...DefaultTheme.fonts,
      regular: {
        fontFamily: "OpenSans",
        fontWeight: "normal",
      },
      medium: {
        fontFamily: "Poppins",
        fontWeight: "normal",
      },
    },
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <PaperProvider theme={theme}>
        <Appbar.Header style={styles.appBar}>
          <Appbar.Content title={props.title} subtitle={props.subtitle} />
          <Appbar.Action
            icon="plus-circle-outline"
            size={28}
            onPress={() => alert("Still on development")}
          />
        </Appbar.Header>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  appBar: {},
});
export default Header;
