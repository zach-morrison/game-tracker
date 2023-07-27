import React from 'react';

function Wishlist({wishlistGames, removeGame}) {


  console.log('wishlist games:', wishlistGames);
  
  const createPlatformString = (platforms) => {
    //console.log('platform object: ', platforms);
    let platformsArray = [];
    for (let i = 0; i < platforms.length; i++) {
      platformsArray.push(platforms[i].platform.name);
    }
    return platformsArray.join(', ');
  }

  return (
    <div className="grid items-stretch">
      <table className="table-fixed">
        <thead>
        <tr className="bg-gray-800">
          <th className="font-bold py-2 px-4 border-b-2 text-center w-1/4">Title</th>
          <th className="font-bold py-2 px-4 border-b-2 text-center">Year</th>
          <th className="font-bold py-2 px-4 border-b-2 text-center">Metacritic</th>
          <th className="font-bold py-2 px-4 border-b-2 text-center">Playtime</th>
          <th className="font-bold py-2 px-4 border-b-2 text-center">Platforms</th>
          <th className="font-bold py-2 px-4 border-b-2 text-center"></th>
          
        </tr>
        </thead>
        <tbody>
        {wishlistGames.length > 0 && wishlistGames.map((game, i) => {
          return (
            <tr key={i}  className="border-y-2 border-gray-800">
              <td className="p-4">{game.name}</td>
              <td className="text-center">{game.year}</td>
              <td className="text-center">{game.metacritic || 'N/A'}</td>
              <td className="text-center">{game.playtime}</td>
              <td className="text-center">{createPlatformString(game.platforms)}</td>
              <td className="text-center"><button onClick={() => removeGame(game.name, 'wishlist')} className="font-bold text-red-600">X</button></td>
            </tr>
          )
        })}
        </tbody>
      </table>
      {wishlistGames.length < 1 && <div className="text-center">No games to display.</div>}
    </div>
  )
}

export default Wishlist;