import React, { Component } from 'react'
// Import firebase ui for react
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import { auth, uiConfig } from '../redux/firebase'

export default class UserPanel extends Component {
  render() {
    return (
      <div>
        <h1>User panel am I</h1>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </div>
    )
  }
}
