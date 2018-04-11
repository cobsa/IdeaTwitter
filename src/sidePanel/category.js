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
  clearActive(e) {
    e.preventDefault()
    this.props.setActive(null)
  }
  render() {
    let { activeCategory, name } = this.props
    let isActive = activeCategory === name
    let clearButton = isActive ? (
      <Badge href="#" onClick={this.clearActive} color="danger">
        Clear filter
      </Badge>
    ) : null
    return (
      <ListGroupItem color={isActive ? 'info' : null} onClick={isActive ? null : this.setActive}>
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
