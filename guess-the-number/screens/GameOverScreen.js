import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import defaultStyles from "../constants/default-styles";
import colors from "../constants/colors";
import MyButton from "../components/MyButton";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const GameOverScreen = ({ roundNumbers, userNumber, startGameAgain }) => {
  return (
    <ScrollView>
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
        <MyButton onPress={startGameAgain}>START GAME AGAIN</MyButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  imageContainer: {
    width: width * 0.6,
    height: width * 0.6,
    overflow: "hidden",
    borderColor: colors.primary,
    borderWidth: 2,
    marginVertical: height / 20,
    borderRadius: (width * 0.6) / 2
  },
  image: {
    width: "100%",
    height: "100%"
  },
  hightLight: {
    color: colors.accent
  },
  resultText: {
    fontSize: width > 350 ? 20 : 15,
    textAlign: "center"
  },
  resultContainer: {
    marginVertical: height / 40,
    padding: 20
  }
});

export default GameOverScreen;
