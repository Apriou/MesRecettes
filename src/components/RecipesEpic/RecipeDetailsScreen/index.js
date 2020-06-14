import React, { useEffect } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { fetchSelectedRecipes } from "../../../api/recipes";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedRecipe } from "../../../redux/selectors";

const RecipeDetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;
  dispatch = useDispatch();

  const recipe = useSelector(getSelectedRecipe);

  //console.log("recipe", recipe);

  useEffect(() => {
    fetchSelectedRecipes(dispatch, id);
  }, []);

  return (
    <ScrollView>
      <View style={styles.containerImage}>
        <Image
          source={{ uri: recipe.image }}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>{recipe.title}</Text>
      <View style={styles.containerIngredients}>
        {recipe.extendedIngredients.map((ing, index) => {
          return (
            <Text key={index} style={styles.img}>
              {ing.name}
            </Text>
          );
        })}
      </View>
    </ScrollView>
  );
};

styles = StyleSheet.create({
  containerImage: {
    height: 200,
  },
  image: {
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    textAlign: "center",
    //marginTop: 10,
    //marginBottom: 10,
    marginVertical: 10, //Remplace marginTop et marginBottom
  },
  containerIngredients: {
    borderTopWidth: 1,
    borderTopColor: "grey",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    padding: 15,
  },
  img: {
    fontSize: 16,
  },
});

export default RecipeDetailsScreen;
