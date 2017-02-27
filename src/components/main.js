import React, { Component } from 'react';
import Card from './card';
import jsonp from 'jsonp';

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      usernames: [ 'self' ]
    }
    this.renderList = this.renderList.bind(this);
    this.getApiData = this.getApiData.bind(this);
  }
  getApiData() {
    let tempData = []
    this.state.usernames.forEach((user, index, array) => {
      const ACCESS_TOKEN = window.location.hash.split('=')[1];
      const url = `https://api.instagram.com/v1/users/${user}/media/recent/?access_token=${ACCESS_TOKEN}`;
      jsonp(url, null, (err, res) => {
        if (err) {
          console.error('ERROR FROM CARD: ', err.message);
        }
        else {
          tempData = [...tempData, res.data]
          if (index === array.length - 1) {
            this.setState({data: tempData.reduce((arr, carry) => {
              return arr.concat(carry)
            }, [])})
            setTimeout(() => this.state.data, 300)
          }
        }
      });
    })
  }
  componentWillMount() {
    // for each loop that takes an array of usernames
    // inject users
    this.getApiData()
  }
  renderList() {
    let pics = [];
    if(!this.state.data.length) {
      <div>Loading...</div>
    }
    else{
      console.log(this.state.data)
      this.state.data.map((picture, index) => {
        pics.push(<Card image={picture} key={picture.id}/>);
      })
      return pics;
    }
  }
  render() {
      return (
        <div className="card-container">
          <h4>Results from ajax</h4>
          {this.renderList()}
        </div>
      )
    }
}
