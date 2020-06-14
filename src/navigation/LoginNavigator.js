import React from "react";
//Composants
import RecipesListScreen from "../components/RecipesEpic/RecipesListScreen";
import RecipeDetailsScreen from "../components/RecipesEpic/RecipeDetailsScreen";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

//A titre d'exemple
function LoginNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={RecipesListScreen} />
      <Stack.Screen name="SignUp" component={RecipeDetailsScreen} />
    </Stack.Navigator>
  );
}

export default LoginNavigator;
