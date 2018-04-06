import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as tweetActions from '../redux/tweet/tweetActions'

const mapStateToProps = state => {
  return {
    tweet: state.tweet
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTweets: () => {
      dispatch(tweetActions.getTweets())
    },
    addTweet: (tweet, categories) => {
      dispatch(tweetActions.addTweet(tweet, categories))
    }
  }
}

export class MainContainer extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getTweets()
  }
  render() {
    return (
      <div>
        Hello world!
        <button onClick={() => this.props.addTweet('Example tweet', ['category1', 'category2'])}>
          Add
        </button>
      </div>
    )
  }
}

const Main = connect(mapStateToProps, mapDispatchToProps)(MainContainer)

export default Main
