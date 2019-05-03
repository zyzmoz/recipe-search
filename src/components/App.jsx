import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import { connect } from 'react-redux';
import { getTrendingRecipes, queryRecipes } from '../actions/recipes';
import RecipeList from './Recipes/RecipeList';
import Spinner from './Spinner/Spinner';

const mapState = (state) => ({
  recipes: state.recipes
});

const actions = {
  getTrendingRecipes,
  queryRecipes
}

class App extends Component {
  state = {
    loading: true
  }

  async componentWillMount() {
    await this.props.getTrendingRecipes();
    this.setState({ loading: false });
  }

  queryRecipes = async (e) => {
    this.setState({ loading: true });
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    await this.props.queryRecipes(recipeName);
    this.setState({ loading: false });
  }

  render() {
    console.log(this.props);
    const recipes = this.props.recipes.data;
    const { loading } = this.state;
    console.log(recipes);
    return (
      <div className="app">        
        <SearchBar queryRecipes={this.queryRecipes} />
        {!loading?<RecipeList recipes={recipes}/>: <Spinner />}
      </div>
    );
  }
}

export default connect(mapState, actions)(App);