import tweetReducer from '../tweetReducer'
import * as actions from '../tweetActions'

test('Should return initial state', () => {
  expect(tweetReducer(undefined, {})).toEqual({ tweets: {} })
})

test('Should add tweet to storage', () => {
  expect(
    tweetReducer(
      undefined,
      actions.setTweet('tweet', ['category1', 'category2'], 'username', 'time', 'uid')
    )
  ).toEqual({
    tweets: {
      uid: {
        categories: ['category1', 'category2'],
        time: 'time',
        tweet: 'tweet',
        username: 'username'
      }
    }
  })
})
