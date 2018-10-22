import * as types from '../types';

export const createGossip = (
  id,
  title,
  description,
) => ({
  type: types.GOSSIP_CREATED,
  payload: {
    id,
    title,
    description,
  },
});

export const confirmGossipCreation = (oldId, newId, date) => ({
  type: types.GOSSIP_CREATION_CONFIRMED,
  payload: {
    oldId,
    newId,
    date,
  },
});

export const fetchGossips = () => ({
  type: types.GOSSIPS_FETCHED,
});

export const reciveGossips = gossips => ({
  type: types.GOSSIPS_RECIVED,
  payload: {
    gossips,
  },
});

export const deleteGossip = id => ({
  type: types.GOSSIP_DELETED,
  payload: {
    id,
  },
});

export const confirmGossipDeletion = id => ({
  type: types.GOSSIP_DELETION_CONFIRMED,
  payload: {
    id,
  },
});

export const fetchGossipDescription = id => ({
  type: types.GOSSIP_DESCRIPTION_FETCHED,
  payload: {
    id,
  },
});

export const reciveGossipDescription = description => ({
  type: types.GOSSIP_DESCRIPTION_RECIVED,
  payload: {
    description,
  },
});
