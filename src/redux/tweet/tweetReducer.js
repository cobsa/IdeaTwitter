import * as _ from 'lodash'
import * as tweetConstants from './tweetConstants'

const initialState = {
  tweets: []
}

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case tweetConstants.setTweet: {
      let newState = _.cloneDeep(state)
      newState.tweets.push({
        uid: action.payload.uid,
        tweet: action.payload.tweet,
        categories: action.payload.categories,
        username: action.payload.username,
        time: action.payload.time
      })
      // Sort data always when new value is added, to ensure correct behavior
      newState.tweets = newState.tweets.sort(function(a, b) {
        return b.time.getTime() - a.time.getTime()
      })
      return newState
    }
    default: {
      return _.cloneDeep(state)
    }
  }
}

export default tweetReducer
