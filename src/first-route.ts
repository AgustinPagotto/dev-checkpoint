import type { FastifyPluginAsync, RouteShorthandOptions } from 'fastify'

const opts: RouteShorthandOptions = {
	schema: {
		response: {
			200: {
				type: 'object',
				properties: {
					hello: { type: 'string' }
				}
			}
		}
	}
}

const firstRoute: FastifyPluginAsync = async (fastify) => {
	fastify.get('/', opts, async (request, reply) => {
		return { hello: 'world' }
	})
}

export default firstRoute
