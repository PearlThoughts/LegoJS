const { MessageRepository } = require('../Repositories');

class HelloWorldService {

	constructor() {
		this.repository = new MessageRepository();
	}

	async getMessage() {
		const { message } = await this.repository.first();
		return { message };
	}
}

module.exports = HelloWorldService;