import type { FastifyInstance } from 'fastify'

const plugin = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', async function () {
    return { hello: 'world!' }
  })
}

export default plugin
