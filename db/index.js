import prisma from '../lib/prisma';


export const getGame = await prisma.game.findUnique({
  where: {
    id: '1',
  },
})