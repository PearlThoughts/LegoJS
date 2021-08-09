const { WorkspaceRepository } = require('../Repositories');

class WorkspaceService {

	constructor() {
		this.repository = new WorkspaceRepository();
	}

	async getTeam(teamId) {
		const team = await this.repository.findOne({ teamId });
		return team;
	}
}

module.exports = WorkspaceService;