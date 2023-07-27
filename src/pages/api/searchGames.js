// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default function handler(req, res) {

  let searchGame = req.body.name;
  axios.get(`https://api.rawg.io/api/games`,
  {
    params: {      
      key: process.env.RAWG_KEY,
      page_size: 20,
      search: searchGame,
      search_exact: true,
      ordering: '-added'
    }
  })
  .then(response => {
    res.send(response.data.results);
  })
  .catch(err => console.log(err))
}
