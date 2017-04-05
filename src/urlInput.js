import React, { Component } from 'react';
import { Button, FormGroup, FormControl  } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';


import './App.css';

export default class UrlInput extends Component{

  render () {
    return (
      <Grid className="show-grid">
        <Row>
          <Col md={9} xs={9}>
            <form className="Input-form">
              <FormGroup bsSize="large" >
                <FormControl onChange={this.onInputChange} bsClass="Shorten-input-field" type="text" placeholder="Enter Url" />
              </FormGroup>
            </form>
          </Col>
        </Row>
        <Row>
          <Col md={3} xs={3}>
            <Button bsSize="small" bsStyle="primary" bsClass="Primary-button" onClick={this.onPress}>
              SHORTEN
            </Button>
          </Col>
        </Row>
      </Grid>
    )
  }



};
