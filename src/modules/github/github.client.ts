import type { Repository } from "./github.types.js"

export class GithubClient {
	async getRepository(owner: string, repo: string) {
		const response = await fetch(
			`https://api.github.com/repos/${owner}/${repo}`,
		)

		if (!response.ok) {
			throw new Error("GitHub request failed")
		}

		return response.json()
	}
	async getRepositories(owner: string): Promise<Repository[]> {
		const response = await fetch(
			`https://api.github.com/users/${owner}/repos`,
		)

		if (!response.ok) {
			throw new Error("GitHub request failed")
		}
		const repositories: Repository[] = (
			await response.json() as Array<{
				id: number,
				node_id: string,
				name: string,
				full_name: string,
			}>
		).map(repo => ({
			id: repo.id,
			node_id: repo.node_id,
			name: repo.name,
			full_name: repo.full_name,
		}))
		return repositories
	}
}
