import React, { useEffect, useState } from "react";
import { Text, Image, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import colors from "../components/config/colors";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

function CreateToDo({ navigation, route }) {
  const [title, setTitle] = useState();
  const [disc, setDisc] = useState();
  const [message, setmessage] = useState();

  const handleAdd = () => {
    const validate = () => {
      if (!title || !disc) {
        setmessage("Both title and descrition are required");
        navigation.setParams({ save: false });
        return false;
      } else {
        setmessage();
        return true;
      }
    };
    validate() &&
      navigation.navigate("Home", { newTitle: title, newDisc: disc });
  };

  useEffect(() => {
    route.params && route.params.save && handleAdd();
  });

  const [fontsLoaded] = useFonts({
    ZenKurenaido: require("../assets/fonts/ZenKurenaido.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <View>
          <TextInput
            placeholder="Important Meeting"
            label="Task Title"
            style={styles.input}
            onChangeText={(newTitle) => {
              setTitle(newTitle);
            }}
          />

          {message && <Text style={styles.text}>{message}</Text>}

          <TextInput
            placeholder="Meeting at 10:30 morning"
            label="Task Discription"
            style={styles.input}
            multiline={true}
            onChangeText={(newDisc) => {
              setDisc(newDisc);
            }}
          />
        </View>

        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/empty_tasks.png")}
            style={{
              resizeMode: "contain",
              width: "90%",
              height: "80%",
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    marginVertical: 4,
  },
  text: {
    fontSize: 14,
    color: colors.mainRed,
    fontFamily: "ZenKurenaido",
    marginLeft: 8,
  },
});

export default CreateToDo;
