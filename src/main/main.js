import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'reactstrap'
// actions
import * as userActions from '../redux/user/userActions'
// Components
import Header from '../header/header'
import Tweet from '../tweet/tweet'
import UserPanel from '../userPanel/userPanel'
import About from '../about/About'
// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUserStatus: () => {
      dispatch(userActions.getStatus())
    }
  }
}

class MainContainer extends React.Component {
  componentDidMount() {
    this.props.getUserStatus()
  }
  render() {
    return (
      <div>
        <Header />
        <Container fluid={true}>
          <br />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                if (this.props.user.logged) {
                  return <Tweet />
                } else {
                  return <UserPanel />
                }
              }}
            />
            <Route path="/about" component={About} />
          </Switch>
        </Container>
      </div>
    )
  }
}

const Main = connect(mapStateToProps, mapDispatchToProps)(MainContainer)

export default Main
