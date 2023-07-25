import React from 'react';

function Playing({playingGames}) {


  return (
    <div>
      <h3>Playing:</h3>
      {playingGames.map((game, i) => <div key={i}>{game.name}</div>)}
    </div>
  )
}

export default Playing;