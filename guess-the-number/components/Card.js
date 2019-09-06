import React from "react";
import { View, StyleSheet } from "react-native";

const Card = ({ children, style = {} }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 4,
      height: 4
    },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    backgroundColor: "#fff",
    elevation: 5,
    borderRadius: 10
  }
});

export default Card;
