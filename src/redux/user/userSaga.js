import { all, call, take, put, takeEvery } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'

import { auth } from '../firebase'

import * as constants from './userConstants'
import * as actions from './userActions'
import * as tweetActions from '../tweet/tweetActions'
import * as categoryActions from '../category/categoryActions'

export function updateLogin() {
  return eventChannel(function(emitter) {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // User is logged in
        emitter(actions.setLogin(user.email, user.uid, user.displayName))
        // Fetch Tweets
        emitter(tweetActions.getTweets())
        // Fetch categories
        emitter(categoryActions.getCategories())
      } else {
        // User is logged out
        emitter(actions.setLogout())
      }
    })
    // The subscriber must return an unsubscribe function
    return () => {
      unsubscribe()
    }
  })
}

export function* watchLogin() {
  const action = yield take(constants.getStatus)
  const chan = yield call(updateLogin, action)
  try {
    while (true) {
      const emitter = yield take(chan)
      yield put(emitter)
    }
  } finally {
  }
}

export function* logout() {
  if (auth.currentUser) {
    auth.signOut()
  }
}

export function* watchLogout() {
  yield takeEvery(constants.logout, logout)
}

export default function* userSaga() {
  yield all([watchLogin(), watchLogout()])
}
