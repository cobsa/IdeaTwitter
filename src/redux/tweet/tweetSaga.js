import { all, call, take, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
// import firebases configured instance
import { firestore, auth } from '../firebase'

import * as constants from './tweetConstants'
import * as actions from './tweetActions'

const db = firestore

export function* addTweet(action) {
  // Add tweet with it's categories to tweet collection
  db
    .collection('/tweets')
    .add({
      uid: auth.currentUser.uid,
      tweet: action.payload.tweet,
      categories: action.payload.categories,
      time: new Date(Date.now())
    })
    .then(tweetsRef => {
      // Add categories to category collection
      action.payload.categories.forEach(category => {
        db.collection('/categories').add({
          tweetid: tweetsRef.id,
          category,
          uid: auth.currentUser.uid
        })
      })
    })
}

export function getTweets() {
  return eventChannel(function(emitter) {
    const unsubscribe = db
      .collection('/tweets')
      .where('uid', '==', auth.currentUser.uid)
      .onSnapshot(
        snapshot => {
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

export function* watchGetTweets() {
  const chan = yield call(getTweets)
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
  yield all([takeEvery(constants.getTweets, watchGetTweets), watchAddTweet()])
}
