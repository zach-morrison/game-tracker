import {useState} from 'react';

function ResultsList({results, section, addGame}) {

  const selectGame = (game) => {
    console.log(game);
    let gameObj = {
      name: game.name,
      playtime: game.playtime,
      metacritic: game.metacritic,
      rating: game.rating,
      year: game.released.substring(0, 4)
    }
    addGame(gameObj);
  }
  
  const logResults = () => {
    console.log(selectedGame);
  }

  return (
    <div className="h-48 max-h-full overflow-scroll">
      <h3>Results:</h3>
      {results.map((game, i) => <div key={i} className="grid grid-flow-col auto-cols-auto">
      <img src={game.background_image} alt="Game Cover Art" width={'128px'}/>
        <div className="flex items-center">{game.name}</div>
        <button onClick={() => selectGame(game)}>Add to {section}</button>
        </div>)}
    </div>
  )
}

export default ResultsList;