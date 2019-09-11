import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import colors from "./../constants/colors";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 31,
    backgroundColor: Platform.OS === "android" ? colors.primary : "white",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: Platform.OS === "ios" ? colors.primary : "transparent",
    borderWidth: Platform.OS === "ios" ? 1 : 0
  },
  headerTitle: {
    color: Platform.OS === "android" ? "white" : colors.primary,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "roboto" : "robotoBold"
  }
});

export default Header;
