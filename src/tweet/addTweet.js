import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap'

class AddTweet extends Component {
  constructor() {
    super()
    this.handleTweet = this.handleTweet.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      tweet: '',
      hashtags: []
    }
  }
  handleTweet(event) {
    const tweet = event.target.value
    const hashtags = []
    let words = tweet.split(' ')
    // TODO: Naive hashtag founding
    words.forEach(word => {
      word = word.trim()
      if (word.charAt(0) === '#' && word.length >= 2) {
        hashtags.push(word)
      }
    })
    this.setState({
      tweet,
      hashtags
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    if (this.state.tweet === '') {
      // Handle empty field
      return
    }
    if (this.state.hashtags.length === 0) {
      // Handle no hashtags
      return
    }

    this.props.addTweet(this.state.tweet, this.state.hashtags)
    this.setState({
      tweet: '',
      hashtags: []
    })
  }
  render() {
    return (
      <div>
        <InputGroup>
          <Input
            type="textarea"
            onChange={this.handleTweet}
            value={this.state.tweet}
            placeholder="Might this be the idea?"
          />
          <InputGroupAddon addonType="append">
            <Button color="secondary" onClick={this.handleSubmit}>
              Tweet
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    )
  }
}

AddTweet.propTypes = {
  addTweet: PropTypes.func
}

export default AddTweet
