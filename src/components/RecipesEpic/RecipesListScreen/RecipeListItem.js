import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const URL_IMAGE = "https://spoonacular.com/recipeImages/";

const RecipeListItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("RecipeDetails", {
          id: item.id,
        });
      }}
    >
      <View style={styles.container}>
        <Image source={{ uri: URL_IMAGE + item.image }} style={styles.image} />
        <View style={styles.containerRight}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    maxWidth: "100%",
  },
  image: {
    width: "30%",
    height: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  containerRight: {
    width: "70%",
    paddingLeft: 10,
    paddingTop: 10,
  },
});

export default RecipeListItem;
