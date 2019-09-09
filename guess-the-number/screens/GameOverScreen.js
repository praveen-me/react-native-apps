import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import defaultStyles from "../constants/default-styles";
import colors from "../constants/colors";

const GameOverScreen = ({ roundNumbers, userNumber, startGameAgain }) => {
  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.boldText}>Game Over!!</Text>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          source={require("./../assets/success.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.resultContainer}>
        <Text style={[defaultStyles.normalText, styles.resultText]}>
          Your phone needed{" "}
          <Text style={[defaultStyles.boldText, styles.hightLight]}>
            {roundNumbers}
          </Text>{" "}
          to guess the number{" "}
          <Text style={[defaultStyles.boldText, styles.hightLight]}>
            {userNumber}.
          </Text>
        </Text>
      </View>
      <Button title="START GAME AGAIN" onPress={startGameAgain} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    overflow: "hidden",
    borderColor: colors.primary,
    borderWidth: 2,
    marginVertical: 30,
    borderRadius: 150
  },
  image: {
    width: "100%",
    height: "100%"
  },
  hightLight: {
    color: colors.accent
  },
  resultText: {
    fontSize: 20
  },
  resultContainer: {
    padding: 20
  }
});

export default GameOverScreen;
