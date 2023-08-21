import {useState} from 'react';

function ResultsList({results, section, addGame}) {
  const [shownObj, setShownObj] = useState({shown: true, buttonText: 'Hide'});

  const selectGame = (game) => {
    console.log(game);
    let gameObj = {
      name: game.name,
      playtime: game.playtime,
      metacritic: game.metacritic,
      rating: game.rating,
      year: game.released.substring(0, 4),
      platforms: game.platforms
    }
    addGame(gameObj);
  }
  
  const logResults = () => {
    console.log(selectedGame);
  }
  
  const handleClick = () => {
    if (shownObj.shown) {
      setShownObj({shown: false, buttonText: 'Show'});
    } else {
      setShownObj({shown: true, buttonText: 'Hide'});
    }
  }

  return (
    <div className="text-center">
      
      <div className="max-h-64 overflow-scroll p-2">
        {results && shownObj.shown && results.map((game, i) => <div key={i} className="flex justify-between p-2 border-b-2 border-sky-800">
        <img className="rounded" src={game.background_image} alt="Game Cover Art" width={'128px'}/>
          <div className="flex items-center text-2xl">{game.name}</div>
          <button onClick={() => selectGame(game)}>Add to {section}</button>
          </div>)}
      </div>
      <div className="py-2">
      {results && results.length > 0 && <button onClick={handleClick} className="justify-center bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">{shownObj.buttonText} results</button>}
      </div>
    </div>
  )
}

export default ResultsList;