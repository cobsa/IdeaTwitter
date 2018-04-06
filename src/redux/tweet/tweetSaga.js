import { all, call, take, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import firebases configured instance
import { firestore, auth } from '../firebase'
// Required for side-effects

import * as constants from './tweetConstants'
import * as actions from './tweetActions'
import { eventChannel } from 'redux-saga'

const db = firestore

export function* addTweet(action) {
  const tweetsRef = db.collection('users/' + auth.currentUser.uid + '/tweets').add({
    tweet: action.payload.tweet,
    categories: action.payload.categories,
    time: new Date(Date.now())
  })
}

export function getTweets() {
  return eventChannel(function(emitter) {
    const unsubscribe = db
      .collection('users/' + auth.currentUser.uid + '/tweets')
      .onSnapshot(snapshot => {
        snapshot.docChanges.forEach(change => {
          if (change.type === 'added') {
            emitter(
              actions.setTweet(
                change.doc.data()['tweet'],
                change.doc.data()['categories'],
                auth.currentUser.displayName,
                change.doc.data()['time'],
                change.doc.id
              )
            )
          }
        })
      })
    // The subscriber must return an unsubscribe function
    return () => {
      unsubscribe()
    }
  })
}

export function* watchGetTweets() {
  const action = yield take(constants.getTweets)
  const chan = yield call(getTweets, action)
  try {
    while (true) {
      const emitter = yield take(chan)
      yield put(emitter)
    }
  } finally {
    console.log('Done')
  }
}

export function* watchAddTweet() {
  yield takeEvery(constants.addTweet, addTweet)
}
export default function* twitterSaga() {
  yield all([watchGetTweets(), watchAddTweet()])
}
