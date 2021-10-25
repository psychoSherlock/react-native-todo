import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import MainScreen from "./app/screens/MainScreen";
import { useFonts } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import colors from "./app/components/config/colors";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateToDo from "./app/screens/CreateToDo";
import CustomAppbar from "./app/components/CustomAppbar";

const Stack = createNativeStackNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins: require("./app/assets/fonts/Poppins.ttf"),
    OpenSans: require("./app/assets/fonts/OpenSans.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />

        <PaperProvider
          theme={{
            ...DefaultTheme,
            colors: {
              ...DefaultTheme,
              primary: colors.mainRed,
              background: "rgba(33, 33, 33, 0.08)",
            },
            fonts: {
              ...DefaultTheme,
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
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                header: (props) => (
                  <CustomAppbar
                    title={props.options.headerTitle}
                    subtitle={props.options.title}
                    back={props.back}
                    navigation={props.navigation}
                    options={props.options}
                  />
                ),
                animation: "slide_from_right",
              }}
            >
              <Stack.Screen
                name="Home"
                component={MainScreen}
                options={{
                  headerTitle: "To Do App",
                  title: "By Athul Prakash",
                }}
              />
              <Stack.Screen
                name="CreateToDo"
                component={CreateToDo}
                options={{ headerTitle: "Create new task", screen: "addTask" }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
