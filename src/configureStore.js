import { createStore } from 'redux';
import mainReducer from './reducers';

/* eslint-disable no-underscore-dangle */
const configureStore = () => createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default configureStore;
