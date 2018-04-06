import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardText, CardFooter } from 'reactstrap'

class TweetItem extends Component {
  render() {
    return (
      <p>
        <Card body className="text-center">
          <CardText>{this.props.tweet}</CardText>
          <CardFooter>{'#Something #Nothing'}</CardFooter>
        </Card>
      </p>
    )
  }
}

TweetItem.propTypes = {
  tweet: PropTypes.string
}

export default TweetItem
