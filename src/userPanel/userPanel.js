import React, { Component } from 'react'
// Import firebase ui for react
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { Card } from 'reactstrap'

import { auth, uiConfig } from '../redux/firebase'

const divStyle = {
  textAlign: 'center'
}

export default class UserPanel extends Component {
  render() {
    return (
      <Card style={divStyle} body>
        <h1>IdeaTwitter</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </Card>
    )
  }
}
