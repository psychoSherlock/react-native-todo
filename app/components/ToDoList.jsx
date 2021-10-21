import colors from "./config/colors";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ToDoCard from "./ToDoCard";

function ToDoList(props) {
  return (
    <ScrollView>
      <View style={styles.cardContainer}>
        <ToDoCard
          title="First App"
          disc="This is the small description for title. This can get really long"
        />
        <ToDoCard
          title="Complete React Native"
          disc="Do the react native reminder app and then start working on the HSR client app"
        />

        <ToDoCard
          title="Do your tryhackme works 🤓"
          disc="You Still have a room to complete and also be the 1% of the top 1%"
        />
        <ToDoCard
          title="What about the dev project"
          disc="Did you actually forget your works psycho? 🙁"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
  },
});

export default ToDoList;
