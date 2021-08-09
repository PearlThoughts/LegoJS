const mongoose = require('mongoose');

const Workspace = mongoose.model('Workspace', { teamId: String });

module.exports = Workspace;