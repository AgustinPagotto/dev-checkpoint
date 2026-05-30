import type { FastifyPluginAsync } from 'fastify'

const firstRoute: FastifyPluginAsync = async (fastify) => {
	fastify.get('/', async (request, reply) => {
		return { hello: 'world' }
	})
}

export default firstRoute
