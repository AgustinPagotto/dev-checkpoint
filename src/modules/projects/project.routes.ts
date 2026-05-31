import type { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export async function projectRoutes(app: FastifyInstance) {
	app.get("/projects", getProjectsHandler)
	app.post("/projects", postProjectHandler)
}

async function getProjectsHandler(request: FastifyRequest, response: FastifyReply) {
	return { hello: 'world' }
}

async function postProjectHandler(request: FastifyRequest, response: FastifyReply) {
	return { hello: 'world' }
}
