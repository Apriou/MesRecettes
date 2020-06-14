import { combineReducers } from "redux";
import { recipesList } from "./recipesList";
import { selectedRecipe } from "./selectedRecipe";
import { TasksList } from "./TasksList";

export default combineReducers({
  recipesList,
  selectedRecipe,
  TasksList,
});
