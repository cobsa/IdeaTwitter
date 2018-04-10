import { all, call, take, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
// import firebases configured instance
import { firestore, auth } from '../firebase'

import * as constants from './categoryConstants'
import * as actions from './categoryActions'

const db = firestore

export function getCategories() {
  return eventChannel(function(emitter) {
    const unsubscribe = db
      .collection('/categories')
      .where('uid', '==', auth.currentUser.uid)
      .onSnapshot(
        snapshot => {
          snapshot.docChanges.forEach(change => {
            if (change.type === 'added') {
              emitter(actions.setCategory(change.doc.id, change.doc.data()['category']))
            }
          })
        },
        () => {
          emitter(END)
        }
      )
    // The subscriber must return an unsubscribe function
    return () => {
      unsubscribe()
    }
  })
}

export function* watchGetCategories() {
  while (true) {
    yield console.log('Watcher started')
    const chan = yield call(getCategories)
    try {
      while (true) {
        const emitter = yield take(chan)
        yield put(emitter)
      }
    } finally {
      yield console.log('Done')
    }
  }
}

export default function* categorySaga() {
  yield all([takeEvery(constants.getCategories, watchGetCategories)])
}
