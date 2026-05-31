import type { FastifyPluginAsyncJsonSchemaToTs } from "@fastify/type-provider-json-schema-to-ts";
import type { FastifyRequest, FastifyReply } from "fastify";
import { GithubClient } from "../github/github.client.js";

export const projectRoutes: FastifyPluginAsyncJsonSchemaToTs = async (app) => {
	app.get("/projects/:userName",
		{
			schema: {
				params: {
					type: "object",
					required: ["userName"],
					properties: {
						userName: { type: "string" },
					},
				},
			},
		},
		async (request, reply) => {
			const gitHClient = new GithubClient;
			try {
				const { userName } = request.params
				return await gitHClient.getRepositories(userName)
			} catch (err) {
				throw new Error("Project not found")
			}
		})

	app.post("/projects", async (request: FastifyRequest, reply: FastifyReply) => {
		return { hello: 'world' }
	})
}
