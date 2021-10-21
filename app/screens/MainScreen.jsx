import React from "react";
import { View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import ToDoList from "../components/ToDoList";

function MainScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/images/work-bg.jpeg")}
      style={styles.mainBg}
    >
      <ScrollView>
        <ToDoList />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainBg: {
    width: "100%",
    height: "100%",
  },
});

export default MainScreen;
