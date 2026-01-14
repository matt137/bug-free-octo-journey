import './App.css';
import { useState, useEffect } from 'react';

//const data = require('./data/pokedex.json');

function App() {
  const [isLoading, setIsLoading] = useState();
  const [allPokemon, setAllPokemon] = useState();
  const [filterText, setFilterText] = useState('');

  const getApiData = async () => {
    const response = await fetch("http://localhost:5212/pokemon/all")
      .then((response) => response.json())
      .finally(() => setIsLoading(false))
    ;
  
    // update the state
    setAllPokemon(response);
  };

  getApiData();

  return (
    <div className="App">
      <div className="App-header">
        <h1>Pokemon Database</h1>
      </div>
        {/* <SearchBar filterText={filterText} onFilterTextChange={setFilterText} /> */}
        <PokemonGrid data={allPokemon} filterText={filterText} isLoading={isLoading} />
    </div>
  );
}

function PokemonGrid({data, filterText, isLoading}) {
  return isLoading ? 
  <div className="wrapper"><p>Loading...</p></div> :
  <div className="wrapper">
    {
      data &&
      data.map((pox) => <Pokemon pokemon={pox} />)
    }
  </div>
}

function Pokemon({pokemon}) {
  let num = String(pokemon.pokedexId).padStart(3, '0');
  return <div key={pokemon.pokedexId} className="pokemon-container">
    <div className="pokemon-image">    
      <img src={require('./data/thumbnails/' + num + '.png')} alt={pokemon.name} />
    </div>
    <div className="pokemon-stats">
      <h3>{pokemon.name}</h3>
      <ul>
        <li>HP: {pokemon.hp}</li>
        <li>Attack :{pokemon.attack}</li>
        <li>Sp. attack :{pokemon.spAttack}</li>
        <li>Defense: {pokemon.defense}</li>
        <li>Sp. defense: {pokemon.spDefence}</li> 
        <li>Speed: {pokemon.speed}</li>
      </ul>
    </div>
  </div>
}

// function SearchBar({filterText}) {
//   return (
//     <form>
//       <input 
//       type="text" 
//       placeholder="Search..." 
//       value={filterText}
//       //onChange={(e) => onFilterTextChange(e.target.value)} 
//       />
      
//     </form>
//   );
// }


export default App;
