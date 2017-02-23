import React, { Component } from 'react';
import jsonp from 'jsonp';
const ACCESS_TOKEN = window.location.hash.split('=')[1];
const url = `https://api.instagram.com/v1/users/self/media/recent?access_token=${ACCESS_TOKEN}`;

jsonp(url, null, function (err, data) {
  if (err) {
    console.error(err.message);
  }
  else {
      let USER_PICS = data.data;
      console.log(USER_PICS);
      let pics = [];
      USER_PICS.map((picture, index) => {
        let pic = <img src={picture.images.standard_resolution.url} />
        return pics.push(pic);
        console.log('a', pics);
      })
  }
});
export default class Card extends Component {
  render() {
    return (
      <div>Hi</div>
    )
  }

}
