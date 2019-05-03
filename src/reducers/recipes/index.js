import { createReducer } from "../createReducer";
import { GET_TRENDING_RECIPES, QUERY_RECIPES, GET_RECIPE } from "../../actions/recipes/constants";

const initialState = {};

const getTrendingRecipes = (state, payload) => {
  return { ...state, data: payload.data };
}

const queryRecipes = (state, payload) => {
  return { ...state, data: payload.data };
}

const getRecipe = (state, payload) => {
  return { ...state, recipe: payload.data }
}

export default createReducer(initialState, {
  [GET_TRENDING_RECIPES]: getTrendingRecipes,
  [QUERY_RECIPES]: queryRecipes,
  [GET_RECIPE]: getRecipe
});