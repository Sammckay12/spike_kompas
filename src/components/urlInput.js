// @flow
import React, { Component } from 'react';
import { Button, FormGroup, FormControl  } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../css/App.css';
import Flexbox from 'flexbox-react';

export default class UrlInput extends Component{

  props: {
    onPress: () => void,
    onInputChange: () => void,
  }

  render () {
    const inputStyle = this.props.invalid ? "Shorten-input-field input-invalid" : "Shorten-input-field"
    return (
      <div>
        <Row>
          <Col xs={9} md={9} lg={9} className="clearPad" >
            <form>
              <FormGroup bsSize="large" >
                <FormControl onChange={this.props.onInputChange} bsClass={inputStyle} type="text" placeholder="Enter Url" />
              </FormGroup>
            </form>
          </Col>
          <Col xs={3} md={3} lg={3} className="clearPad">
            <Button bsSize="small" bsStyle="primary" bsClass="Primary-button" onClick={this.props.onPress}>
              SHORTEN
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
};
