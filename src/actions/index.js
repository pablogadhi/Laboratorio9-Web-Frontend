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
