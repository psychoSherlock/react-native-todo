import React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";

function Header(props) {
  return (
    <Appbar.Header style={styles.bottom}>
      <Appbar.Content
        title="To Do App"
        subtitle="A small work by @psychoSherlock"
      />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  bottom: {
    top: 0,
  },
});
export default Header;
