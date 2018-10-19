import { combineReducers } from 'redux';
import * as types from '../types';

const defaultState = {
  'uuid-blabla-0': {
    title: 'Etson ya no d clases',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  'uuid-blabla-1': {
    title: 'Ya nacio el hijo de lynette!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  'uuid-blabla-2': {
    title: 'Samuel contrato a Michelle!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
};

const byId = (state = defaultState, action) => {
  switch (action.type) {
  case types.GOSSIP_CREATED: {
    const { id } = action.payload;
    return {
      ...state,
      [id]: action.payload,
    };
  }
  default: {
    return state;
  }
  }
};

const defaultIds = ['uuid-blabla-0', 'uuid-blabla-2', 'uuid-blabla-1'];

const allIds = (state = defaultIds, action) => {
  switch (action.type) {
  case types.GOSSIP_CREATED: {
    const { id } = action.payload;
    return [
      ...state,
      id,
    ];
  }
  default: {
    return state;
  }
  }
};

const mainReducer = combineReducers({
  byId,
  allIds,
});

export default mainReducer;

export const getGossip = (state, id) => state.byId[id];
export const getGossips = state => state.allIds.map(
  id => getGossip(state, id),
);
export const getGossipIds = state => state.allIds;
