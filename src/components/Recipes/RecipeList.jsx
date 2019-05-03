import React from 'react';
import RecipeItem from './RecipeItem';
import './Recipes.css';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes && recipes.map((recipe, i) => <RecipeItem recipe={recipe} key={i}/>)}
    </div>
  );
};

export default RecipeList;