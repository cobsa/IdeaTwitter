import { all, call } from 'redux-saga/effects'

import twitterSaga from './tweet/tweetSaga'
import userSaga from './user/userSaga'
import categorySaga from './category/categorySaga'

export default function* rootSaga() {
  yield all([call(userSaga), call(twitterSaga), call(categorySaga)])
}
