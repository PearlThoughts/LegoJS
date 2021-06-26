const { HelloWorldService } = require('../Services');

class HelloWorldController {

	constructor() {
		this.service = new HelloWorldService();
	}

	async getMessage(req, res) {
		const message = await this.service.getMessage();
		return res.status(200).send(message);
	}
}

module.exports = HelloWorldController;