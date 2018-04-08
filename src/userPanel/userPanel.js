import React, { Component } from 'react'
// Import firebase ui for react
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import { auth, uiConfig } from '../redux/firebase'

const divStyle = {
  textAlign: 'center'
}

export default class UserPanel extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h1>IdeaTwitter</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </div>
    )
  }
}
