import React, { Component } from 'react';

export default class App extends Component {
  render() {
    const CLIENT_ID = 'b78187d5d63a43dab1cfb2e8d55880e7';
    const REDIRECT_URI = 'http://localhost:8080/redirect';
    const url = `https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`;
    return (
      <div>
        <a href={url}>Login</a>
        {this.props.children}
      </div>
    );
  }
}
