//
import  axios  from 'axios';
import { GET_TRENDING_RECIPES, QUERY_RECIPES, GET_RECIPE } from './constants';

const url = "https://www.food2fork.com/api/search?key=bd6d6be2f27ad7b1535ab6cb4446eaff";
const api = axios.create({
  baseURL: "https://www.food2fork.com/api/search?key=bd6d6be2f27ad7b1535ab6cb4446eaff",
});

export const getTrendingRecipes = () => {
  return async (dispatch) => {
    const res = await api.get();
    dispatch({
      type: GET_TRENDING_RECIPES,
      payload: { data: res.data.recipes }
    });
  }
}

export const queryRecipes = (str) => {
  return async (dispatch) => {
    const query = str.replace(/\s/g, ',');
    const res = await axios.get(`${url}&q=${query}`);
    dispatch({
      type: QUERY_RECIPES,
      payload: { data: res.data.recipes }
    });
  }
}

export const getRecipe = (rId) => {
  return async (dispatch) => {
    const res = await axios.get(`https://www.food2fork.com/api/get?key=bd6d6be2f27ad7b1535ab6cb4446eaff&rId=${rId}`);
    console.log('res',res);
    dispatch({
      type: GET_RECIPE,
      payload: { data: res.data.recipe }
    })
  }
}