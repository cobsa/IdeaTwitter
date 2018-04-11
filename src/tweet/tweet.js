import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'

import * as actions from '../redux/tweet/tweetActions'
import * as categoryActions from '../redux/category/categoryActions'

import TweetList from './tweetList'
import AddTweet from './addTweet'
import SidePanel from '../sidePanel/sidePanel'

const mapStateToProps = state => {
  return {
    tweets: state.tweet.tweets,
    activeCategory: state.category.activeCategory
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTweet: (tweet, hashtags) => {
      dispatch(actions.addTweet(tweet, hashtags))
    },
    setActiveCategory: category => {
      dispatch(categoryActions.setActiveCategory(category))
    }
  }
}

class TweetComponent extends Component {
  render() {
    return (
      <Row>
        {' '}
        <Col sm={{ size: '2', offset: 0 }}>
          <SidePanel />
        </Col>
        <Col sm={{ size: '8', offset: 1 }}>
          <div>
            <AddTweet addTweet={this.props.addTweet} />
            <br />
          </div>
          <div>
            <TweetList
              tweets={this.props.tweets}
              activeCategory={this.props.activeCategory}
              setActiveCategory={this.props.setActiveCategory}
            />
          </div>
        </Col>
      </Row>
    )
  }
}

TweetComponent.propTypes = {}

const Tweet = connect(mapStateToProps, mapDispatchToProps)(TweetComponent)
export default Tweet
