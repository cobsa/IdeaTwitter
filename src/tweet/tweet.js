import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as actions from '../redux/tweet/tweetActions'

import TweetList from './tweetList'
import AddTweet from './addTweet'
const mapStateToProps = state => {
  return {
    tweets: state.tweet.tweets
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTweet: (tweet, hashtags) => {
      dispatch(actions.addTweet(tweet, hashtags))
    }
  }
}

class TweetComponent extends Component {
  render() {
    return (
      <div>
        <p>
          <AddTweet addTweet={this.props.addTweet} />
        </p>
        <p>
          <TweetList tweets={this.props.tweets} />
        </p>
      </div>
    )
  }
}

TweetComponent.propTypes = {}

const Tweet = connect(mapStateToProps, mapDispatchToProps)(TweetComponent)
export default Tweet
