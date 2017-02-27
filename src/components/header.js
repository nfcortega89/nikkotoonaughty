import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions/index';

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      authenticate: false,
      userStatus: 'Login'
    }
    this.onAuthenticateUser = this.onAuthenticateUser.bind(this)
  }
  onAuthenticateUser() {
    this.setState({
      authenticate: true,
      userStatus: 'Logout'
    })
  }
  render() {
    return (
      <div className="header-container">
        <div className="logo-container">
          <img src="http://placekitten.com/200/75" />
        </div>
        <ul>
          <li><a>Follow User</a></li>
          <li><a onClick={this.onAuthenticateUser} href={this.props.url}>{this.state.userStatus}</a></li>
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    userStatus: state.userStatus
  };
}

export default connect(null, mapStateToProps)(Header)
