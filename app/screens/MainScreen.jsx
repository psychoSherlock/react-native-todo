import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

function MainScreen(props) {
  return (
    <View>
      <ImageBackground
        source={require("../assets/images/work-bg.jpeg")}
        style={styles.mainBg}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBg: {
    width: "100%",
    height: "100%",
  },
});

export default MainScreen;
