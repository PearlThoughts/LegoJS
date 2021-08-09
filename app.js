const createError = require('http-errors');
const express = require('express');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const logger = require('morgan');
const { App, ExpressReceiver } = require('@slack/bolt');
const mongoose = require('mongoose');

const { WorkspaceRouter } = require('./Routes');
const SlackHandler = require('./SlackHandler');
const { WorkspaceService } = require('./Services');

class ExpressApp {
    constructor() {
        const env = dotenv.config();
        dotenvExpand(env);
        this.express = express();
        this.service = new WorkspaceService();
    }

    init() {
        this.initDB();
        this.initSlackReceivers();
        this.initMiddlewares();
        this.initRoutes();
        return this;
    }

    initDB() {
        const connectionUrl = `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_NAME}`;
        mongoose.connect(connectionUrl, {
            useNewUrlParser: true,
            authSource: 'admin',
            useUnifiedTopology: true,
        });
    }

    initSlackReceivers() {
        const receiver = new ExpressReceiver({
            signingSecret: process.env.SLACK_SIGNING_SECRET,
        });
        const boltApp = new App({
            token: process.env.SLACK_BOT_TOKEN,
            signingSecret: process.env.SLACK_SIGNING_SECRET,
            authorize: async ({ teamId, enterpriseId }) => {
                const team = await this.service.getTeam(teamId);
                return {
                    botToken: team.accessToken,
                };
            },
            receiver,
        });

        const slackHandler = new SlackHandler(boltApp);
        slackHandler.registerEvents();
        slackHandler.registerCommands();
        this.express.use('/', receiver.router);
    }

    initMiddlewares() {
        this.express.use(
            logger(
                ':date[iso] ":method :url HTTP/:http-version" :status :response-time ms ":referrer" ":user-agent"',
            ),
        );
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
    }

    registerRouters() {
        new WorkspaceRouter(this.express);
    }

    initRoutes() {
        this.registerRouters();

        this.express.use((req, res, next) => {
            next(createError(404));
        });

        this.express.use((err, req, res, next) => {
            return res
                .status(500)
                .send({ message: err.message || 'Internal Server Error' });
        });
    }
}

module.exports = new ExpressApp().init().express;
