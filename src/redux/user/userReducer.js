import * as _ from 'lodash'

import * as constants from './userConstants'

const initialState = {
  uid: null,
  email: null,
  username: null,
  logged: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.setLogin: {
      let newState = _.cloneDeep(state)
      return {
        ...newState,
        uid: action.payload.uid,
        email: action.payload.email,
        username: action.payload.username,
        logged: true
      }
    }
    case constants.setLogout: {
      let newState = _.cloneDeep(state)
      return {
        ...newState,
        uid: null,
        email: null,
        username: null,
        logged: false
      }
    }
    default: {
      return _.cloneDeep(state)
    }
  }
}

export default userReducer
