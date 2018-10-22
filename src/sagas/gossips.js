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
    yield put(actions.confirmGossipCreation(id, createdGossip.id, createdGossip.date));
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

function* deleteGossipGenerator(action) {
  const { payload: { id } } = action;
  try {
    yield call(api.deleteGossip, id);
    yield put(actions.confirmGossipDeletion(Number(id)));
  } catch (e) {
    console.log(e);
  }
}

function* fetchGossipDescriptionGen(action) {
  try {
    const response = yield call(api.getDescription, action.payload.id);
    yield put(actions.reciveGossipDescription(response.description));
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

export function* watchGossipDeletion() {
  yield takeEvery(
    types.GOSSIP_DELETED,
    deleteGossipGenerator,
  );
}

export function* watchDescriptionFetching() {
  yield takeLatest(
    types.GOSSIP_DESCRIPTION_FETCHED,
    fetchGossipDescriptionGen,
  );
}
