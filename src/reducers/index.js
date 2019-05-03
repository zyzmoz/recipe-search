import { combineReducers } from 'redux';
import recipesReducer from './recipes';

const rootReducer = combineReducers({
  recipes: recipesReducer
  // state: (state = {}) => state
});

export default rootReducer;