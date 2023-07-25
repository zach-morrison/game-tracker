// "use client";
import {useState} from 'react';
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
    console.log(game.name+' added to '+section);
    setAllGames({...allGames, [section]:[...allGames[section], game]});
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
    <div className="App w-3/4 items-center">
        <h1 className="text-4xl text-center">Game Tracker</h1>
        <input type="text" name="game" value={gameToAdd} onChange={handleChange} onKeyPress={handleKeyPress} className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-3/4"/>
        <button onClick={searchGames} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
        <ResultsList results={results} section={section} addGame={addGame}/>
        <br/>
        <button name="wishlist" onClick={changeSection}>Wishlist</button>
        <button name="playing" onClick={changeSection}>Playing</button>
        <button name="completed" onClick={changeSection}>Completed</button>
        {section === 'wishlist' ? <Wishlist wishlistGames={allGames.wishlist}/>
        : section === 'playing' ? <Playing playingGames={allGames.playing}/>
        : section === 'completed' ? <Completed completedGames={allGames.completed}/>
        : <div></div> }
    </div>
  );
}

export default App;
