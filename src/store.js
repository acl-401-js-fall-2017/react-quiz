import { createStore, applyMiddleware, compose, combineReducers, } from 'redux';
import books from './books/reducer';
import thunk from 'redux-thunk';


const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  books,
  composeEnchancers(
    applyMiddleware(thunk)
  )
);

export default store;