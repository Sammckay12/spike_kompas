import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ShortenerContainer from './shortenerContainer';

describe('Shortener Container', () => {
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    var shortenerContainer = ReactDOM.render(<ShortenerContainer />, div)
    expect(shortenerContainer).toExist
  })


});
