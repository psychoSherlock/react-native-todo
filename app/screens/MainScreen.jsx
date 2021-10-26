import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";

import { IconButton, TouchableRipple } from "react-native-paper";

import { useFonts } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";

import colors from "../components/config/colors";

export function ToDoList({ title, disc, deleteFun }) {
  let [HeaderfontsLoaded] = useFonts({
    Oswald: require("../assets/fonts/Oswald.ttf"),
    Ubuntu: require("../assets/fonts/Ubuntu.ttf"),
  });

  if (!HeaderfontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.doListItem}>
        <View>
          <Text style={styles.doTitle}>{title}</Text>
          <Text style={styles.doDisc}>{disc}</Text>
        </View>

        <View style={styles.cardIcons}>
          <IconButton
            icon="check-circle"
            color={colors.successGreen}
            size={25}
            onPress={() => alert("On dev")}
          />

          <IconButton
            icon="delete-circle"
            color={colors.mainRed}
            size={27}
            onPress={deleteFun}
          />
        </View>
      </View>
    );
  }
}

function MainScreen({ navigation, route }) {
  const [toDoList, setToDoList] = useState([]);

  const updateList = () => {
    route.params &&
      setToDoList([
        ...toDoList,
        {
          title: route.params.newTitle,
          disc: route.params.newDisc,
        },
      ]);
  };

  useEffect(() => {
    updateList();
  }, [route.params]);

  const deleteTodo = (index) => {
    const newList = toDoList.filter((item, itemIndex) => itemIndex !== index);
    setToDoList(newList);
  };

  const List = toDoList.map((data, index) => {
    return (
      <ToDoList
        title={data.title}
        disc={data.disc}
        key={index}
        deleteFun={() => deleteTodo(index)}
      />
    );
  });

  return (
    <View>
      <ImageBackground
        source={require("../assets/images/work-bg.jpeg")}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <ScrollView>
          <View style={styles.doListContainer}>{List}</View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  doListContainer: {
    alignItems: "center",
  },
  doListItem: {
    marginVertical: 4,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "94%",
    padding: 8,
    elevation: 13,
    flexDirection: "row",
    minHeight: 110,
    borderColor: "black", //change
    borderWidth: 1,
  },
  doTitle: {
    fontFamily: "Oswald",
    fontSize: 21,
    maxWidth: "83%",
  },
  doDisc: {
    fontSize: 15,
    color: "grey",
    fontFamily: "Ubuntu",
    maxWidth: "92%",
    minWidth: "92%",
  },
  cardIcons: {
    flexDirection: "column",
    justifyContent: "space-around",
    right: "20%",
  },
});

export default MainScreen;
