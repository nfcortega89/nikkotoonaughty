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
    this.props.login() // action
  }
  render() {
    return (
      <div className="header-container">
        <span className="logo"><h1>CUR-A-FAB</h1></span>
        <span className="slogan"><h2>what interests you?</h2></span>
        <ul>
          <li><a className="nav" onClick={this.onAuthenticateUser} href={this.props.url}>{this.props.isLoggedIn ? "LOGOUT" : "LOGIN"}</a></li>
          <li><a className="nav">FOLLOW USER</a></li>
        </ul>
      </div>
    );
  }
}

// allows us to use import state and use them as props
function mapStateToProps(state) {
  // login is from the reducer -> index.js
  return {
    isLoggedIn: state.login.isLoggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({login}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
