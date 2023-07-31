const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// async function main() {
//   const allUsers = await prisma.game.findMany()
//   console.log(allUsers)
// }

async function getWishlistGames() {
  const allGames = await prisma.game.findMany({
    where: { section: "wishlist" },
  })
  return allGames;
}

async function addGame(game) {
  const allUsers = await prisma.game.findMany()
  return allUsers;
}



// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
  
  module.exports.getGames = getGames;