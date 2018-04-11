import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardText, Badge } from 'reactstrap'
import reactStringReplace from 'react-string-replace'

class TweetItem extends Component {
  setActiveCategory(e, category) {
    e.preventDefault()
    this.props.setActiveCategory(category)
  }
  render() {
    // Render hashtags in different color and make them links to change categories
    let hashTagged = reactStringReplace(this.props.tweet, /#(\w+)/g, (match, i) => (
      <Badge
        href="#"
        color="info"
        size="sm"
        key={match + i}
        onClick={e => {
          this.setActiveCategory(e, '#' + match)
        }}
      >
        #{match}
      </Badge>
    ))
    return (
      <div>
        <Card body className="text-center">
          <CardText>{hashTagged}</CardText>
        </Card>
      </div>
    )
  }
}

TweetItem.propTypes = {
  tweet: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(String),
  setActiveCategory: PropTypes.func.isRequired
}

export default TweetItem
