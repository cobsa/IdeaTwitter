import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem } from 'reactstrap'

class Category extends Component {
  render() {
    return <ListGroupItem>{this.props.name}</ListGroupItem>
  }
}

Category.propTypes = {
  name: PropTypes.string
}

export default Category
