import './App.css';

function App() {
  let data = require('./data/pokedex.json');
  return (
    
    <div className="App">
      <div className="App-header">
        <h1>Pokemon Database</h1>
      </div>
      <PokemonGrid data={data} />     
    </div>
  );
}

function PokemonGrid({data}) {
  const elements = [];
  data.forEach((pokemon) => {
    elements.push(
      <Pokemon pokemon={pokemon} />
    );

  });

  return <div className="wrapper">{elements}</div>
}

function Pokemon({pokemon}) {
  let num = String(pokemon.id).padStart(3, '0');
  return <div key={pokemon.id} className="pokemon-container">
    <img src={require('./data/thumbnails/' + num + '.png')} alt={pokemon.name.english} />
  </div>
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

export default App;
