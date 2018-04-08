import * as _ from 'lodash'
import * as constants from './categoryConstants'

const initialState = {
  categories: [],
  activeCategory: null
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.setCategory: {
      let newState = _.cloneDeep(state)
      newState.categories.push({
        id: action.payload.id,
        name: action.payload.name
      })
      return newState
    }
    case constants.setActiveCategory: {
      let newState = _.cloneDeep(state)
      newState.activeCategory = action.payload.id
      return newState
    }
    default: {
      return _.cloneDeep(state)
    }
  }
}

export default categoryReducer
