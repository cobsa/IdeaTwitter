import React from 'react'
import PropTypes from 'prop-types'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleLogout(event) {
    if (this.props.logged) {
      this.props.logout()
    } else {
    }
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>IdeaTwitter</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </NavItem>
              <NavItem>
                {this.props.logged ? (
                  <NavLink onClick={this.handleLogout}>Sign out</NavLink>
                ) : (
                  <Link className="nav-link" to="/">
                    Sign in
                  </Link>
                )}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

Navbar.PropTypes = {
  logout: PropTypes.func,
  logged: PropTypes.bool
}

export default NavBar
