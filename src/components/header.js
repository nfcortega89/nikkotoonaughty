import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions';

class Header extends Component {
  constructor(props){
    super(props)
    this.onAuthenticateUser = this.onAuthenticateUser.bind(this)
  }
  onAuthenticateUser() {
    console.log("Authenticating")
    this.props.login() // action
  }
  render() {
    return (
      <div className="header-container">
        <div className="logo-container">
          <img src="http://placekitten.com/200/75" />
        </div>
        <ul>
          <li><a>Follow User</a></li>
          <li><a onClick={this.onAuthenticateUser} href={this.props.url}>{this.props.isLoggedIn ? "Logout" : "Login"}</a></li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // login is from the reducer
  return {
    isLoggedIn: state.login.isLoggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({login}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
