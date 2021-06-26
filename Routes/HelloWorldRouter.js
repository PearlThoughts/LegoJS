const { HelloWorldController } = require('../Controllers');
const { sampleMiddleware } = require('../Middlewares');

class HelloWorldRouter {
  constructor(app) {
    this.app = app;
    this.controller = new HelloWorldController();
    this.registerApis();
  }

  registerApis() {
    this.app.use(sampleMiddleware);
    this.app.get('/welcome', this.controller.getMessage.bind(this.controller));
  }
}

module.exports = HelloWorldRouter;
