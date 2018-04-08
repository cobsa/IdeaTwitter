import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap'

export default class About extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1>IdeaTwitter</h1>
            <p>
              Simple demo site made using Firebase hosting and Firestorm databases. Frontend is
              developed using ReactJS, Redux and Saga. Authentication is handled by Google firebase
              services and so is completely safe.
            </p>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}
