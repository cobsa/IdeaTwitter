import * as userConstants from './userConstants'

export const loginAction = (email, password) => {
  return {
    type: userConstants.login,
    payload: {
      userName,
      password
    }
  }
}

export const setLogin = (email, uid, username) => {
  return {
    type: userConstants.setLogin,
    payload: {
      email,
      uid,
      username
    }
  }
}
export const setLogout = () => {
  return {
    type: userConstants.setLogout
  }
}
export const logoutAction = {
  type: userConstants.logout,
  payload: {}
}

export const signupAction = (email, username, password, password_again) => {
  return {
    type: userConstants.signup,
    payload: {
      email,
      username,
      password,
      password_again
    }
  }
}

export const getStatus = () => {
  return {
    type: userConstants.getStatus
  }
}
