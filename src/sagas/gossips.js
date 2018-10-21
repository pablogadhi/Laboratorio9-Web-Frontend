import {
  call, takeEvery, takeLatest, put,
} from 'redux-saga/effects';
import * as api from '../api';
import * as types from '../types';
import * as actions from '../actions';

function* createGossipGenerator(action) {
  const {
    payload: {
      id,
      title,
      description,
    },
  } = action;

  const gossipData = {
    title,
    description,
  };

  try {
    const createdGossip = yield call(
      api.createGossip,
      gossipData,
    );
    yield put(actions.confirmGossipCreation(id, createdGossip.id));
  } catch (e) {
    console.log(e);
  }
}

function* fetchGossipsGenerator() {
  try {
    const allGossips = yield call(api.fetchGossips);
    yield put(actions.reciveGossips(allGossips));
  } catch (e) {
    console.log(e);
  }
}

export function* watchGossipsFetching() {
  yield takeLatest(
    types.GOSSIPS_FETCHED,
    fetchGossipsGenerator,
  );
}

export function* watchGossipCreation() {
  yield takeEvery(
    types.GOSSIP_CREATED,
    createGossipGenerator,
  );
}
