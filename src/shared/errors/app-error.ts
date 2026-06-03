import type { FastifyInstance } from "fastify"
import { NotFoundError } from "./not-found-error.js"
import fastifyPlugin from "fastify-plugin"

async function errorHandlerPlugin(app: FastifyInstance) {
	app.setErrorHandler(function(error, request, reply) {
		this.log.error(error)
		if (error instanceof NotFoundError) {
			return reply.status(404).send({
				error: error.message,
			})
		}
		return reply.status(500).send({
			error: "Internal Server Error",
		})
	})
}

export default fastifyPlugin(errorHandlerPlugin)
