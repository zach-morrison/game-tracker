// import db from '../../../db';
import prisma from '../../../lib/prisma';

export default function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  prisma.getWishlistGames()
  .then((response) => res.send(response))
  .catch((err) => console.log(err))
}
