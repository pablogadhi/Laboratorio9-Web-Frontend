/* Saga principal con forks de todos los observadores */

import { fork, all } from 'redux-saga/effects';
import * as watchers from './gossips';

function* mainSaga() {
  yield all([
    fork(watchers.watchGossipsFetching),
    fork(watchers.watchGossipCreation),
    fork(watchers.watchGossipDeletion),
    fork(watchers.watchDescriptionFetching),
  ]);
}

export default mainSaga;
