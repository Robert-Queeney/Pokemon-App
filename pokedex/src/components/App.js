import React, { Component } from 'react';
import Pokelist from './Pokelist'; 
import './styles/App.css';

class App extends Component {
  constructor() {
    super(); 
    this.state = {}; 
  }

  render()  {
    return (
    <div className="App">
      <Pokelist />
    </div>
    );
  }
}

export default App;