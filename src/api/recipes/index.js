import axios from "axios";
import {
  fetchRecipesAction,
  fetchSelectedRecipesAction,
} from "../../redux/actions";

const ENDPOINT_BASE = "https://api.spoonacular.com/recipes";
const ENDPOINT_RECIPES = ENDPOINT_BASE + "/search";
const ENDPOINT_RECIPES_INFO = ENDPOINT_BASE + "/{id}/information";
const apiKey = "eb98ad3b5c064fcb901fa98c04a4a8c5";
const MAX_PER_PAGE = 30;

export const fetchRecipes = async (dispatch, query) => {
  try {
    const response = await axios.get(ENDPOINT_RECIPES, {
      params: {
        apiKey,
        number: MAX_PER_PAGE,
      },
    });

    dispatch(fetchRecipesAction(response.data.results));
  } catch (e) {
    console.log("Erreur fetchRecipes", e);
  }
};

export const fetchSelectedRecipes = async (dispatch, recipeId) => {
  try {
    const response = await axios.get(
      ENDPOINT_BASE + `/${recipeId}/information`,
      {
        params: {
          apiKey,
        },
      }
    );

    //console.log("response.data", response.data);

    dispatch(fetchSelectedRecipesAction(response.data));
  } catch (e) {
    console.log("Erreur fetchSelectedRecipes", e);
  }
};
