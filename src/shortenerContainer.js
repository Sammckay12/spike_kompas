import React, { Component } from 'react';
import logo from './logo.svg';
import { Grid, Row, Col } from 'react-bootstrap';
import UrlInput from './urlInput'
import './App.css';

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

  renderShortenedUrl = () => {
    return this.state.shortenedUrl ? (
      <a href={this.state.shortenedUrl} class="shortUrlResponse" url>{this.state.shortenedUrl}</a>
    ) : null
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Grid>
          <Row>
            <Col xs={4} xsOffset={0}>
              <UrlInput onPress={this.onPress} />
            </Col>
            <Col xs={2} xsOffset={0}>
              {this.renderShortenedUrl()}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
