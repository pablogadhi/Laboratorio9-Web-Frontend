import { combineReducers } from 'redux';
import * as types from '../types';

const byId = (state = {}, action) => {
  switch (action.type) {
  case types.GOSSIP_CREATED: {
    const { id } = action.payload;
    return {
      ...state,
      [id]: action.payload,
    };
  }
  case types.GOSSIPS_RECIVED: {
    const stateToBe = {};
    action.payload.gossips.forEach((gossip) => {
      stateToBe[gossip.id] = gossip;
    });
    return {
      ...stateToBe,
    };
  }
  case types.GOSSIP_CREATION_CONFIRMED: {
    const { oldId, newId, date } = action.payload;
    const newState = { ...state };
    const newGossip = {
      id: newId,
      title: newState[oldId].title,
      date,
    };
    delete newState[oldId];
    return {
      ...newState,
      [newId]: newGossip,
    };
  }
  case types.GOSSIP_DELETION_CONFIRMED: {
    const newState = { ...state };
    delete newState[action.payload.id];
    return newState;
  }
  default: {
    return state;
  }
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
  case types.GOSSIP_CREATED: {
    const { id } = action.payload;
    return [
      ...state,
      id,
    ];
  }
  case types.GOSSIPS_RECIVED: {
    const stateToBe = [];
    action.payload.gossips.forEach((gossip) => {
      stateToBe.push(gossip.id);
    });
    return [
      ...stateToBe,
    ];
  }
  case types.GOSSIP_CREATION_CONFIRMED: {
    const { oldId, newId } = action.payload;
    return [
      ...state.filter(id => id !== oldId),
      newId,
    ];
  }
  case types.GOSSIP_DELETION_CONFIRMED: {
    return state.filter(id => id !== action.payload.id);
  }
  default: {
    return state;
  }
  }
};

const displayDescription = (state = '', action) => {
  switch (action.type) {
  case types.GOSSIP_DESCRIPTION_RECIVED: {
    return action.payload.description;
  }
  default:
    return state;
  }
};

const gossipsReducer = combineReducers({
  byId,
  allIds,
  displayDescription,
});

export default gossipsReducer;

export const getGossip = (state, id) => state.byId[id];
export const getGossips = state => state.allIds.map(
  id => getGossip(state, id),
);
export const getGossipIds = state => state.allIds;
export const getDisplayDescription = state => state.displayDescription;
