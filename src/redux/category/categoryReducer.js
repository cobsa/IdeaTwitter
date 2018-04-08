import * as _ from 'lodash'
import * as constants from './categoryConstants'
import * as userConstants from '../user/userConstants'

const initialState = {
  categories: [],
  activeCategory: null
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.setCategory: {
      let newState = _.cloneDeep(state)
      if (!newState.categories.includes(action.payload.name)) {
        // Only add category if it doesn't exist
        newState.categories.push(action.payload.name)
      }

      return newState
    }
    case constants.setActiveCategory: {
      let newState = _.cloneDeep(state)
      newState.activeCategory = action.payload.name
      return newState
    }
    case userConstants.setLogout: {
      // Clear store
      return initialState
    }
    default: {
      return _.cloneDeep(state)
    }
  }
}

export default categoryReducer
