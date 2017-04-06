import React, { Component } from 'react';
import './css/App.css';
import ShortenerContainer from './components/shortenerContainer'
import UrlListContainer from './components/urlListContainer'

class App extends Component {
  render() {
      return (
        <div>
          <ShortenerContainer />
          <UrlListContainer />
        </div>
      );
  }
}

export default App;
