// "use client";
import {useState, useEffect} from 'react';
// import './App.css';
import axios from 'axios';
import ResultsList from './components/ResultsList';
import Wishlist from './components/Wishlist';
import Playing from './components/Playing';
import Completed from './components/Completed';

const empty = {
  wishlist: [],
  playing: [],
  completed: []
}

function App() {

  const [section, setSection] = useState('wishlist');
  const [allGames, setAllGames] = useState(empty);
  const [gameToAdd, setGameToAdd] = useState('');
  const [results, setResults] = useState([]);


  const addGame = (game) => {
    let found = false;
    for (let i = 0; i < allGames[section].length; i++) {
      if (allGames[section][i].name === game.name) {
        found = true;
      }
    }
    if (!found) {
      console.log(game.name+' added to '+section);
      setAllGames({...allGames, [section]:[...allGames[section], game]});
    }
  }
  
  const removeGame = (game, sect) => {
    let index = 0;
    for (let i = 0; i < allGames[sect].length; i++) {
      if (allGames[sect][i].name === game) {
        console.log('found!');
        index = i;
      }
    }
    let newSect = [...allGames[sect]];
    newSect.splice(index, 1);
    setAllGames({...allGames, [sect]: newSect});
  }

  const searchGames = () => {
    axios.post('/api/searchGames', {name: gameToAdd})
    .then((response) => {
      setResults(response.data);
      console.log('list below:');
      console.log(response.data);
    })
  }
  
  const handleChange = (e) => {
    setGameToAdd(e.target.value);
  }

  const handleKeyPress = (e) => {
    if (e.code === 'Enter') {
      searchGames();
    }
  }

  const changeSection = (e) => {
    setSection(e.target.name);
  }
  
  return (
    <div className="App w-3/4">
      <h1 className="text-5xl text-center pb-3">Game Tracker</h1>
      <div className="text-center pt-2">Search for a game below to add it to your tracker.</div>
      <div className="flex items-center px-32 py-4">
      <input type="text" name="game" value={gameToAdd} onChange={handleChange} onKeyPress={handleKeyPress} className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-3/4 flex-auto"/>
      <button onClick={searchGames} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
      </div>
      <ResultsList results={results} section={section} addGame={addGame}/>
      <br/>
      
      <div className="flex flex-wrap justify-center">
        <button name="wishlist" onClick={changeSection} className="hover:bg-gray-800 text-gray-200 font-bold py-2 px-4 rounded-tl grow" style={section === 'wishlist' ? selectedStyle : null}>Wishlist</button>
        <button name="playing" onClick={changeSection} className="hover:bg-gray-800 text-gray-200 font-bold py-2 px-4 grow" style={section === 'playing' ? selectedStyle : null}>Playing</button>
        <button name="completed" onClick={changeSection} className="hover:bg-gray-800 text-gray-200 font-bold py-2 px-4 rounded-tr grow" style={section === 'completed' ? selectedStyle : null}>Completed</button>
      </div>
      <div>
      {section === 'wishlist' ? <Wishlist wishlistGames={allGames.wishlist} removeGame={removeGame}/>
      : section === 'playing' ? <Playing playingGames={allGames.playing} removeGame={removeGame}/>
      : section === 'completed' ? <Completed completedGames={allGames.completed} removeGame={removeGame}/>
      : <div></div> }
      </div>
    </div>
  );
}

export default App;


const selectedStyle = {
  backgroundColor: 'rgb(31 41 55)'
}

const unselectedStyle = {
  backgroundColor: 'red',
  hover: {
    backgroundColor: 'green'
  }
}