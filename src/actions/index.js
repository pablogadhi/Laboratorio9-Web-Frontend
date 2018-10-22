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

export const confirmGossipCreation = (oldId, newId) => ({
  type: types.GOSSIP_CREATION_CONFIRMED,
  payload: {
    oldId,
    newId,
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
