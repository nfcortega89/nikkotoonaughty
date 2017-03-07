import superagent from 'superagent';
let jsonp = require('superagent-jsonp');

export const AUTHORIZE_USER = "AUTHORIZE_USER";
export const FETCH_DATA = "FETCH_DATA";
export const REQUEST_DATA = "REQUEST_DATA";

export function login() {
  return {
    type: AUTHORIZE_USER,
    isLoggedIn: true
  }
}
export function fetchData(data) {
  return {
    type: FETCH_DATA,
    payload: data
  }
}
export function requestData() {
  return (dispatch, getState) => {
    const ACCESS_TOKEN = window.location.hash.split('=')[1];
    const url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${ACCESS_TOKEN}`;
    superagent.get(url).use(jsonp).end((err, res) => {
      if(!res){
        return;
      }
      dispatch(fetchData(res.body.data));
    })
  };
}
