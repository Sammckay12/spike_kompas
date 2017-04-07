import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ShortenerContainer from './shortenerContainer';
import renderer from 'react-test-renderer';
jest.mock('../apiCall/api');

describe('Shortener Container', () => {
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    var shortenerContainer = ReactDOM.render(<ShortenerContainer />, div)
    expect(shortenerContainer).toExist
  })

  it ('shows invalid message if url invalid', () => {
    const div = document.createElement('div');
    var shortenerContainer = ReactDOM.render(<ShortenerContainer />, div)
    shortenerContainer.onInputChange({
      target: {
        value: 'invalidurl',
      },
    })
    shortenerContainer.onPressSubmit()
    expect(shortenerContainer.state.invalidUrl).toBe(true)
  })

  it ('makes request on submit when valid url', async () => {
    const div = document.createElement('div');
    var shortenerContainer = ReactDOM.render(<ShortenerContainer />, div)
    shortenerContainer.onInputChange({
      target: {
        value: 'http://test.com/test',
      },
    })
    await shortenerContainer.onPressSubmit()
    console.log('valid url: ', shortenerContainer.state)
    expect(shortenerContainer.state.shortenedUrl).toBe('test.url')
  })
});
