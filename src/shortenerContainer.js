import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UrlInput from './urlInput'
import Flexbox from 'flexbox-react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './BasicStyles.css'


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
      <Grid fluid>

          <img src={logo} className="App-logo" alt="logo" />
          <Row center='xs'>
            <h2>Spike - url shortener</h2>
          </Row>
          <Row center='xs'>
            <Col xs={9} >
                <UrlInput onPress={this.onPress} />
                {this.renderShortenedUrl()}
            </Col>
          </Row>
        </Grid>

    );
  }

};
