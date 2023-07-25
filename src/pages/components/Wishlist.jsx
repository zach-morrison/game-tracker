import React from 'react';

function Wishlist({wishlistGames}) {


  console.log('wishlist games:', wishlistGames);


  return (
    <div>
      <h3>Wishlist:</h3>
      {wishlistGames.map((game, i) => <div key={i}>{game.name}</div>)}
      {/* <table>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Platform</th>
        </tr>
        {wantGames.map((game, i) => {
          return (
            <tr key={i}>
              <td>{game}1</td>
              <td>{game}2</td>
              <td>{game}3</td>
            </tr>
          )
        })}
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
      </table> */}
      {wishlistGames.length < 1 && <div>No games to display.</div>}
    </div>
  )
}

export default Wishlist;