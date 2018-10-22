import { fork, all } from 'redux-saga/effects';
import * as watchers from './gossips';

function* mainSaga() {
  yield all([
    fork(watchers.watchGossipsFetching),
    fork(watchers.watchGossipCreation),
    fork(watchers.watchGossipDeletion),
  ]);
}

export default mainSaga;
