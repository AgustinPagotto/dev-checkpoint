import fastifyPlugin from 'fastify-plugin'
import fastifyMongo from '@fastify/mongodb'
import type { FastifyPluginAsync } from 'fastify'

const dbConnector: FastifyPluginAsync = async (fastify) => {
	fastify.register(fastifyMongo, {
		url: 'mongodb://localhost:27017/dev-checkpoint'
	})
}

export default fastifyPlugin(dbConnector)
