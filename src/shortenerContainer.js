import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UrlInput from './urlInput'

export default class ShortenerContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  shortenUrl = (url: string) => {
    fetch('http://localhost:8081/api/shorten/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: url,
      })
    })
    .then((response) => {
      console.log(response);
      return response.json()
    })
    .then((responseJson) => {
      this.setState({
        shortenedUrl: responseJson.shortUrl,
      })
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
  }


  onPress = (url: string) => {
    this.shortenUrl(url)
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
              <UrlInput onPress={this.onPress} />
      </div>
    );
  }

};
