import React from 'react';

function Wishlist({wishlistGames}) {


  console.log('wishlist games:', wishlistGames);
  console.log(typeof wishlistGames[0].year);


  return (
    <div>
      <table className="table-auto">
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Metacritic</th>
          <th>Playtime</th>
        </tr>
        {wishlistGames.map((game, i) => {
          return (
            <tr key={i}>
              <td>{game.name}</td>
              <td> {game.year} </td>
              <td>{game.metacritic}</td>
              <td>{game.playtime}</td>
              
            </tr>
          )
        })}
      </table>
      {wishlistGames.length < 1 && <div>No games to display.</div>}
    </div>
  )
}

export default Wishlist;