import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { fetchRecipes } from "../../../api/recipes";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes } from "../../../redux/selectors";
import RecipeListItem from "./RecipeListItem";

const RecipesListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const recipes = useSelector(getRecipes);

  useEffect(() => {
    fetchRecipes(dispatch);
  }, []);

  const _renderItem = ({ item }) => {
    return <RecipeListItem item={item} navigation={navigation} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "grey",
  },
});

export default RecipesListScreen;
