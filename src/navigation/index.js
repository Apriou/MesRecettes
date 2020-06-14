import React from "react";
//Composants
import TasksContainer from "../components/TasksEpic/TasksContainer";
import RecipesNavigator from "./RecipesNavigator";
import LoginNavigator from "./LoginNavigator";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

function AppNavigation() {
  const user = false;

  //Exemple de restriction de chemin à un utilisateur
  //   if (!user) {
  //     return (
  //       <NavigationContainer>
  //         <LoginNavigator />
  //       </NavigationContainer>
  //     );
  //   }

  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            if (route.name === "RecipesList") {
              //aller voir dans la doc de expo guide et ionicons
              icon = focused ? "ios-list-box" : "ios-list";
            } else {
              icon = "ios-cart";
            }
            return <Ionicons name={icon} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "black", //par exemple
          inactiveTintColor: "grey",
        }}
      >
        <Tabs.Screen
          name="RecipesList"
          component={RecipesNavigator}
          options={{ title: "Recettes" }}
        />
        <Tabs.Screen
          name="Tasks"
          component={TasksContainer}
          options={{ title: "Courses" }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
