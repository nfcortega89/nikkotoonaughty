import React, { Component } from 'react';
import Card from './card';
import jsonp from 'jsonp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, requestData } from '../actions';

class Main extends Component {
  constructor(props){
    super(props)
    this.renderList = this.renderList.bind(this);
    this.getApiData = this.getApiData.bind(this);
  }
  getApiData() {
    this.props.requestData();
  }
  componentWillMount() {
    this.getApiData()
    console.log(this.getApiData())
  }
  renderList() {
    let pics = [];
    if(!this.props.data.length) {
      <div>Loading...</div>
    }
    else{
      this.props.data.map((picture, index) => {
        pics.push(<Card image={picture} key={picture.id}/>);
      })
      return pics;
    }
  }
  render() {
      return (
        <div className="gallery">
          <h4>IG:</h4>
          {this.renderList()}
        </div>
      )
    }
}

function mapStateToProps({ data }) {
  return { data };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ requestData, login }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
