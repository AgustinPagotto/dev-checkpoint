import type { FastifyInstance } from "fastify"

export async function errorHandlerPlugin(
	app: FastifyInstance,
) {
	app.setErrorHandler(function(error, request, reply) {
		this.log.error(error)
		return reply.status(500).send({
			error: "Internal Server Error",
		})
	})
}
