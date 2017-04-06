import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UrlInput from './urlInput';

describe('UrlInput', () => {
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    var urlInput = ReactDOM.render(<UrlInput />, div)
    expect(urlInput).toExist
  })

  it ('has button SHORTEN', () => {

  })
});
