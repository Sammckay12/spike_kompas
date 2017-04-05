import React, { Component } from 'react';
import { Button, FormGroup, FormControl  } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';
import Flexbox from 'flexbox-react';

const LINK_REGEX = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()[\]{};:'".,<>?«»“”‘’]))/igm


export default class UrlInput extends Component{

  props: {
  onPress: () => void,
}

state: {
  inputValue: string,
  invalidUrl: bool,
}

  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      invalidUrl: false,
    }
  }

  onInputChange = (event) => {
      console.log( event.target.value)
    this.setState({
      inputValue: event.target.value,
    })
    console.log(this.state.invalidUrl, this.state.inputValue.match(LINK_REGEX))
    if (this.state.invalidUrl && this.state.inputValue.match(LINK_REGEX)) {
      this.setState({
        invalidUrl: false,
  })
}
  }

  onPress = () => {
    console.log('on press')
    if (this.state.inputValue.match(LINK_REGEX)) {
      this.props.onPress(this.state.inputValue)
    } else {
      this.setState({
        invalidUrl: true,
      })
    }
  }


  renderInvalid () {
    console.log(this.state.invalidUrl)
    return this.state.invalidUrl ? (
      <div>Invalid Url</div>
    ) : null
  }



  render () {
    return (
      <Grid className="show-grid">
        <Row middle='xs'>
          <Col xs={9} >
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
          {this.renderInvalid()}
      </Grid>
    )
  }



};
