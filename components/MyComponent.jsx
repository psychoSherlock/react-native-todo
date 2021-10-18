import React, { useState } from "react";
import { View, StyleSheet, Text, ImageBackground, Image } from "react-native";

function WelcomeScreen(props) {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <View>
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <ImageBackground
          source={require("../assets/background.jpg")}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              top: 70,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/logo-red.png")}
              style={{
                height: 100,
                width: 100,
              }}
            />
            <Text>Sell what you dont need!</Text>
          </View>
        </ImageBackground>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            backgroundColor: "#fc5c65",
            width: "100%",
            height: 80,
          }}
        ></View>

        <View
          style={{
            backgroundColor: "#4ECDC4",
            width: "100%",
            height: 80,
          }}
        ></View>
      </View>
    </View>
  );
}
export default WelcomeScreen;
