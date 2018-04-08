import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardText, CardFooter } from 'reactstrap'

class TweetItem extends Component {
  render() {
    return (
      <div>
        <Card body className="text-center">
          <CardText>{this.props.tweet}</CardText>
        </Card>
      </div>
    )
  }
}

TweetItem.propTypes = {
  tweet: PropTypes.string,
  categories: PropTypes.arrayOf(String)
}

export default TweetItem
