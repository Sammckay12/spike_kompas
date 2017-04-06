import React, { Component } from 'react';
import logo from '../logo.svg';
import UrlInput from './urlInput'
import Flexbox from 'flexbox-react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { shortenUrl } from '../apiCall/api'
import '../css/BasicStyles.css'

const LINK_REGEX = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()[\]{};:'".,<>?«»“”‘’]))/igm


export default class ShortenerContainer extends Component {

  state: {
    shortenedUrl: string,
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  onPressSubmit = async () => {
    if (this.state.inputValue.match(LINK_REGEX)) {
      try {
        const response = await shortenUrl(this.state.inputValue)
        console.log('response: ', response)
        this.setState({
          shortenedUrl: response.shortenedUrl,
        })
      } catch (err) {
        console.log('err: ', err)
      }
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
            <Row center='xs' className="tag-line">
              <h5>exactly the same, just smaller..</h5>
            </Row>
            <Row center='xs' className="row1">
              <Col xs={12} md={12} lg={12} >
                  <UrlInput
                    onPress={this.onPressSubmit}
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
