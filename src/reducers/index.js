/* Reductor principal de la aplicacion */

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import gossipsReducer, * as gossipSelectors from './gossips';

export default combineReducers({
  gossips: gossipsReducer,
  form: formReducer,
});

export const getGossip = (state, id) => gossipSelectors.getGossip(state.gossips, id);
export const getGossips = state => gossipSelectors.getGossips(state.gossips);
export const getGossipIds = state => gossipSelectors.getGossipIds(state.gossips);
export const getDisplayDescription = state => gossipSelectors.getDisplayDescription(state.gossips);
