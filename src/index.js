import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import RecipeDetail from './components/Recipes/RecipeDetail';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Router>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <header className="app-header">
        <h1 className="app-title">Recipe Search</h1>
      </header>
      <Route exact path="/" component={() => <App />} />
      <Route path="/details/:id" component={() => <RecipeDetail />} />
    </Provider>
  </Router>
  ,
  document.getElementById('root')
);

