import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardText } from 'reactstrap'

import TweetItem from './tweetItem'

class TweetList extends Component {
  render() {
    let { tweets, activeCategory } = this.props
    if (tweets.length === 0) {
      return (
        <Card body className="text-center">
          <CardText>There aren't any ideas, yet.</CardText>
        </Card>
      )
    }
    let tweetList = tweets.map(tweet => {
      if (activeCategory === null || tweet.categories.includes(activeCategory)) {
        return (
          <TweetItem
            key={tweet.uid}
            tweet={tweet.tweet}
            categories={tweet.categories}
            time={tweet.time}
            setActiveCategory={this.props.setActiveCategory}
          />
        )
      }
    })
    return <div>{tweetList}</div>
  }
}

TweetList.propTypes = {
  tweets: PropTypes.array,
  activeCategory: PropTypes.string,
  setActiveCategory: PropTypes.func
}

export default TweetList
