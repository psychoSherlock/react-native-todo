import React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { useFonts } from "@expo-google-fonts/inter";
import colors from "./config/colors";

function CustomAppbar({ title, subtitle, navigation, back, options }) {
  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: colors.mainRed,
        },
        fonts: {
          regular: {
            fontFamily: "OpenSans",
            fontWeight: "normal",
          },
          medium: {
            fontFamily: "Poppins",
            fontWeight: "normal",
          },
        },
      }}
    >
      {back && (
        <Appbar.Action size={30} icon="close" onPress={navigation.goBack} />
      )}

      <Appbar.Content title={title} subtitle={subtitle && subtitle} />

      {options.screen === "addTask" ? (
        <Appbar.Action
          icon="check"
          size={30}
          onPress={() => {
            navigation.setParams({ save: true });
          }}
        />
      ) : (
        <Appbar.Action
          icon="sticker-plus-outline"
          size={28}
          onPress={() => navigation.navigate("CreateToDo")}
        />
      )}
    </Appbar.Header>
  );
}

export default CustomAppbar;
