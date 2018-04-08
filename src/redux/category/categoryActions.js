import * as constants from './categoryConstants'

export const getCategories = () => {
  return {
    type: constants.getCategories
  }
}

export const setCategory = (id, name) => {
  return {
    type: constants.setCategory,
    payload: {
      id,
      name
    }
  }
}

export const setActiveCategory = id => {
  return {
    type: constants.setActiveCategory,
    payload: {
      id
    }
  }
}
