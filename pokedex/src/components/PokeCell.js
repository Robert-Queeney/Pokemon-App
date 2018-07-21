import React from 'react'; 
import sprites from '../assets/sprites.png';
import './styles/PokeCell.css'; 
//import sprites from 'C:/Users/Robert Queeney/Desktop/Pokemon-App/pokedex/src/assets/sprites.png';

const PokeCell = ({ pokeClass, handleOnClick }) => {
    const { id, backgroundPosition } = pokeClass; 
    const style = { backgroundImage: `url(${sprites})`, backgroundPosition };
    
    return <button onClick={ () => handleOnClick(id) } style={style} className="poke-cell"></button>
}

export default PokeCell; 