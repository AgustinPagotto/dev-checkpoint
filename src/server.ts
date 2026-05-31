import Fastify from 'fastify'
import type { FastifyInstance } from 'fastify'
import dbConnector from './shared/database/our-db-connector.js'
import firstRoute from './first-route.js'
import { projectRoutes } from "./modules/projects/project.routes.js"

const server: FastifyInstance = Fastify({
	logger: true,
})

server.register(dbConnector)
server.register(projectRoutes)
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
