import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecipe } from '../../actions/recipes';
import './Recipes.css';
import Spinner from '../Spinner/Spinner';

const mapState = (state) => ({
  recipe: state.recipes.recipe
});

const actions = {
  getRecipe
}

class RecipeDetail extends Component {
  state = {
    loading: true
  }
  async componentDidMount() {
    const { id } = this.props.match.params;
    await this.props.getRecipe(id);
    this.setState({loading: false});
  }
  render() {
    console.log(this.props);
    const { recipe } = this.props;
    const { loading } = this.state;
    return (
      <div className="recipe">        
        {
          !loading ?
          <div className="recipe-desc">
            <Link class="button" to="/">Back Home</Link>
            <div className="recipe-image">
              <img src={recipe.image_url} alt="" />
            </div>
            <h1>{recipe.title}</h1>
            <h3>{recipe.publisher}</h3>
            <div className="recipe-ingredients">
              <h2>Ingredients</h2>
              <ul>
                {recipe.ingredients && recipe.ingredients.map((ingredient, i) =>
                  <li key={i}>{ingredient}</li>)
                }
              </ul>
            </div>
          </div>:
          <Spinner />
        }        
      </div>
    );
  }
}

export default connect(mapState, actions)(withRouter(RecipeDetail));