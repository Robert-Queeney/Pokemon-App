import React, { Component } from 'react';
import Pokelist from './Pokelist'; 
import DetailView from './DetailView'; 
import './styles/App.css';
import Pokemon from '../Pokemon'; 

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      pokemon: {}
    }; 
    this.handleOnClick = this.handleOnClick.bind(this); 
  }

  handleOnClick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`, {
      mode: 'cors'
    })
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState ({ pokemon });
      })
      .catch(err => console.log(err));
  }

  render()  {
    return (
    <div className="App">
      <Pokelist handleOnClick={this.handleOnClick} />
      <DetailView pokemon={ this.state.pokemon }/>
    </div>
    );
  }
}

export default App;