import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UrlInput from './urlInput'
import Flexbox from 'flexbox-react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './BasicStyles.css'

const LINK_REGEX = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()[\]{};:'".,<>?«»“”‘’]))/igm


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

  onPress = () => {
    console.log('on press')
    if (this.state.inputValue.match(LINK_REGEX)) {
      this.shortenUrl(this.state.inputValue)
    } else {
      this.setState({
        invalidUrl: true,
      })
    }
  }

  onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    })
    if (
      this.state.invalidUrl &&
      (event.target.value.match(LINK_REGEX) || !event.target.value.length)
    ) {
      this.setState({
        invalidUrl: false,
      })
    }
  }

  renderShortenedUrl = () => {
    return this.state.shortenedUrl && !this.state.invalidUrl ? (
      <div className="shortenedUrlContainer">
        <a href={this.state.shortenedUrl} className="shortUrlResponse" url>{this.state.shortenedUrl}</a>
      </div>
    ) : null
  }

  renderInvalid () {
    console.log('render invalid: ', this.state.invalidUrl)
    return this.state.invalidUrl ? (
      <div className="invalid-message">Invalid Url</div>
    ) : null
  }

  render() {
    return (
      <div className="top-container">
        <Grid fluid className="grid">
            <Row center='xs' className="header">
              <h2>Spike.ly</h2>
            </Row>
            <Row center='xs' className="row1">
              <Col xs={12} md={12} lg={12} >
                  <UrlInput
                    onPress={this.onPress}
                    onInputChange={this.onInputChange}
                    invalid={this.state.invalidUrl} />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} lg={12} >
                {this.renderInvalid()}
                {this.renderShortenedUrl()}
              </Col>
            </Row>
        </Grid>
      </div>
    );
  }

};
