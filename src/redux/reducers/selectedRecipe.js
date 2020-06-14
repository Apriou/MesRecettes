import { SELECTED_RECIPE } from "../actionTypes";

const defaultState = {
  image: "https://spoonacular.com/recipeImages/610524-556x370.jpg", //Je le met car ne peut pas être vide dans <Image />
  title: "",
  extendedIngredients: [
    {
      name: "",
    },
  ],
};

export const selectedRecipe = (state = defaultState, action) => {
  switch (action.type) {
    case SELECTED_RECIPE:
      //payload: { data: data }
      return action.payload.data;
    default:
      return state;
  }
};
