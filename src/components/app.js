import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

export default class App extends Component {
  render() {
    const CLIENT_ID = 'b78187d5d63a43dab1cfb2e8d55880e7';
    const REDIRECT_URI = 'https://serene-temple-47189.herokuapp.com/redirect';
    const url = `https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`;
    return (
      <div>
        <Header url={url}/>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

/**
 * TODO:
 * style header
 * replace logo with a text logo
 * move all logic from getApi into actions
 * have reducer combine actions
 */
