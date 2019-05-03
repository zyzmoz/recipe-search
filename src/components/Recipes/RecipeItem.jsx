import React from 'react';
import { Link } from 'react-router-dom';

const RecipeItem = ({ recipe }) => {
  return (
    <div className="recipe-item">          
      <div className="recipe-image">
        <img src={recipe.image_url} alt="img" />
      </div>
      <div className="recipe-details">

        <div className="recipe-title">{recipe.title}</div>
        <div className="recipe-publisher">{recipe.publisher}</div>
        <Link to={`/details/${recipe.recipe_id}`} class="button">View Recipe</Link>
      </div>
    </div>
  );
};

export default RecipeItem;