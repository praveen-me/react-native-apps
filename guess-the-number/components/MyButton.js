import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import colors from "../constants/colors";

const MyButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    fontFamily: "roboto",
    fontSize: 18
  }
});

export default MyButton;
