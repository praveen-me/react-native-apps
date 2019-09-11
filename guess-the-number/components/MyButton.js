import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import colors from "../constants/colors";

const MyButton = ({ onPress, children }) => {
  let Button = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    Button = TouchableNativeFeedback;
  }

  return (
    <View style={styles.btnContainer}>
      <Button onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 10,
    overflow: "hidden"
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    fontFamily: "roboto",
    fontSize: Dimensions.get("window").width > 350 ? 18 : 12
  }
});

export default MyButton;
