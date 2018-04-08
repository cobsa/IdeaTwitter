import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ListGroup } from 'reactstrap'

import Category from './category'

const mapStateToProps = state => {
  return {
    categories: state.category.categories
  }
}

class SidePanelComponent extends Component {
  render() {
    let { categories } = this.props
    let categoryList = categories.map(category => {
      return <Category name={category.name} key={category.id} />
    })
    return <ListGroup>{categoryList}</ListGroup>
  }
}

SidePanelComponent.propTypes = {
  categories: PropTypes.array
}

const SidePanel = connect(mapStateToProps)(SidePanelComponent)
export default SidePanel
