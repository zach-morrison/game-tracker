import React from 'react';

function Completed({completedGames}) {


  return (
    <div>
      <h3>Completed:</h3>
      {completedGames.map((game, i) => <div key={i}>{game.name}</div>)}
    </div>
  )
}

export default Completed;