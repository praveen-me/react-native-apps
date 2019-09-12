import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground
} from "react-native";

const MealItem = ({ meal }) => {
  const { title, duration, affordability, complexity, imageUrl } = meal;

  console.log(imageUrl);

  return (
    <View style={styles.mealItem}>
      <TouchableOpacity>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: imageUrl }} style={styles.imgBg}>
              {/* <Text>{title}</Text> */}
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <Text>{duration}m</Text>
            <Text>{affordability.toUpperCase()}</Text>
            <Text>{complexity.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc"
  },
  mealRow: {
    flexDirection: "row"
  },
  mealDetails: {
    justifyContent: "space-between"
  },
  imgBg: {
    width: "100%",
    height: 200
  }
});

export default MealItem;
