import React from "react";
import colors from "./config/colors";

import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

import { useFonts } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

function ToDoCard({ title, disc }) {
  let [fontsLoaded] = useFonts({
    Oswald: require("../assets/fonts/Oswald.ttf"),
    Ubuntu: require("../assets/fonts/Ubuntu.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <TouchableHighlight
        onPress={() => {
          alert("Edits the list");
        }}
        underlayColor="#DDDDDD"
      >
        <View style={styles.card}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.disc}>{disc}</Text>
          </View>

          <View style={styles.cardIcons}>
            <AntDesign
              name="checkcircle"
              size={20}
              color={colors.successGreen}
              onPress={() => {
                alert("Add Post to success");
              }}
            />
            <MaterialIcons
              name="delete-forever"
              size={25}
              color={colors.mainRed}
              onPress={() => {
                alert("Deletes the post");
              }}
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: "92%",
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 6,
    marginBottom: 6,
    padding: 8,
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontFamily: "Oswald",
    fontSize: 20,
    maxWidth: "80%",
  },
  disc: {
    fontFamily: "Ubuntu",
    fontSize: 15,
    color: "grey",
    maxWidth: "90%",
  },
  cardIcons: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
});
export default ToDoCard;
