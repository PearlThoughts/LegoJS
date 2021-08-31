const { eventMap } = require('./EventMap');
const { commandMap } = require('./CommandMap');

class SlackHandler {
    constructor(slackApp) {
        this.slackApp = slackApp;
    }

    registerEvents() {
        Object.keys(eventMap).forEach((event) => {
            this.slackApp.event(event, eventMap[event]);
        });
    }

    registerCommands() {
        Object.keys(commandMap).forEach((command) => {
            this.slackApp.command(command, commandMap[command]);
        });
    }
}

module.exports = SlackHandler;
