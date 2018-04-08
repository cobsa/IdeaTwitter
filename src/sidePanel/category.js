import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem, Badge } from 'reactstrap'

class Category extends Component {
  constructor() {
    super()
    this.setActive = this.setActive.bind(this)
    this.clearActive = this.clearActive.bind(this)
  }
  setActive() {
    this.props.setActive(this.props.name)
  }
  clearActive() {
    this.props.setActive(null)
  }
  render() {
    let { activeCategory, name } = this.props
    let isActive = activeCategory === name
    let clearButton = isActive ? (
      <Badge onClick={this.clearActive} color="danger">
        Clear
      </Badge>
    ) : null
    return (
      <ListGroupItem
        color={isActive ? 'info' : null}
        onClick={isActive ? this.clearActive : this.setActive}
      >
        {name} {clearButton}
      </ListGroupItem>
    )
  }
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
  activeCategory: PropTypes.string
}

export default Category
