import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TweetItem from './tweetItem'

class TweetList extends Component {
  render() {
    let { tweets } = this.props
    let tweetList = tweets.map(tweet => {
      return (
        <TweetItem
          key={tweet.uid}
          tweet={tweet.tweet}
          categories={tweet.categories}
          time={tweet.time}
        />
      )
    })
    return <div>{tweetList}</div>
  }
}

TweetList.propTypes = {
  tweets: PropTypes.array
}

export default TweetList
