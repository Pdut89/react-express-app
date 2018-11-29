import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Base from './pages/base'

class App extends Component {
  render() {
    return (
      <Router>
        <Base/>
      </Router>
    );
  }
}

export default App;
