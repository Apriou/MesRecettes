import React from "react";
//Composants
import RecipesListScreen from "../components/RecipesEpic/RecipesListScreen";
import RecipeDetailsScreen from "../components/RecipesEpic/RecipeDetailsScreen";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function RecipesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RecipesList" component={RecipesListScreen} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} />
    </Stack.Navigator>
  );
}

export default RecipesNavigator;
