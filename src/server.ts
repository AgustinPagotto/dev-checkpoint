import Fastify from 'fastify'
import dbConnector from './shared/database/our-db-connector.js'
import { projectRoutes } from "./modules/projects/project.routes.js"

import type { JsonSchemaToTsProvider } from '@fastify/type-provider-json-schema-to-ts'

const server = Fastify({ logger: true }).withTypeProvider<JsonSchemaToTsProvider>()

server.register(dbConnector)
server.register(projectRoutes)

async function start() {
	try {
		await server.listen({ port: 3000 })
	} catch (err) {
		server.log.error(err)
		process.exit(1)
	}
}

start()
