import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ListGroup, Card, CardText } from 'reactstrap'

import Category from './category'
import * as actions from '../redux/category/categoryActions'

const mapStateToProps = state => {
  return {
    categories: state.category.categories,
    activeCategory: state.category.activeCategory
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setActiveCategory: activeCategory => {
      dispatch(actions.setActiveCategory(activeCategory))
    }
  }
}

class SidePanelComponent extends Component {
  render() {
    let { categories, activeCategory } = this.props
    if (categories.length === 0) {
      return (
        <Card body className="text-center">
          <CardText>There aren't any hastags, yet.</CardText>
        </Card>
      )
    }
    let categoryList = categories.map(category => {
      return (
        <Category
          name={category}
          key={category}
          setActive={this.props.setActiveCategory}
          activeCategory={activeCategory}
        />
      )
    })
    return (
      <div>
        <h4>{'Your hashtags'}</h4>
        <ListGroup>{categoryList}</ListGroup>
      </div>
    )
  }
}

SidePanelComponent.propTypes = {
  categories: PropTypes.array
}

const SidePanel = connect(mapStateToProps, mapDispatchToProps)(SidePanelComponent)
export default SidePanel
