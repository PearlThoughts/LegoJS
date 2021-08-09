const Workspace = require('../Models/Workspace');

class WorkspaceRepository {

    async findOne(query) {
        return await Workspace.findOne(query);
    }
}

module.exports = WorkspaceRepository;