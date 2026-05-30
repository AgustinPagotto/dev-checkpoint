import Fastify from 'fastify'
import type { FastifyInstance } from 'fastify'
import dbConnector from './our-db-connector.js'
import firstRoute from './first-route.js'

const server: FastifyInstance = Fastify({
	logger: true,
})

server.register(dbConnector)
server.register(firstRoute)

async function start() {
	try {
		await server.listen({ port: 3000 })
	} catch (err) {
		server.log.error(err)
		process.exit(1)
	}
}

start()
