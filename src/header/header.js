import React, { Component } from 'react'
import { connect } from 'react-redux'
// Import components
import NavBar from './navBar'
// Import actions
import * as userActions from '../redux/user/userActions'

const mapStateToProps = state => {
  return {
    logged: state.user.logged
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(userActions.logoutAction())
    }
  }
}

class HeaderComponent extends Component {
  render() {
    return <NavBar logged={this.props.logged} logout={this.props.logout} />
  }
}

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)

export default Header
