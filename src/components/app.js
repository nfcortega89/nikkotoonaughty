import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

export default class App extends Component {
  render() {
    const CLIENT_ID = 'b78187d5d63a43dab1cfb2e8d55880e7';
    const REDIRECT_URI = 'http://localhost:8080/redirect';
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
 * - Install redux, redux-think
 * - Set up store (createStore) and connect thunk as middleware
 * - Combine reducers
 * - Create Auth reducer
 * - Create Login Action
 * - Toggle Nav Login/Logout using store/reducer
 */
