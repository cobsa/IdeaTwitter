import * as tweetConstants from './tweetConstants'

export const getTweets = () => {
  return {
    type: tweetConstants.getTweets,
    payload: {}
  }
}

export const getCategories = () => {
  return {
    type: tweetConstants.getCategories,
    payload: {}
  }
}

export const selectCategory = categories => {
  return {
    type: tweetConstants.selectCategory,
    payload: {
      categories
    }
  }
}

export const setTweet = (tweet, categories, username, time, uid) => {
  return {
    type: tweetConstants.setTweet,
    payload: {
      tweet,
      categories,
      username,
      time,
      uid
    }
  }
}

export const addTweet = (tweet, categories) => {
  return {
    type: tweetConstants.addTweet,
    payload: {
      tweet,
      categories
    }
  }
}
