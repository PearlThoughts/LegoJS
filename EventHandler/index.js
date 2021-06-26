const { eventMap } = require('./EventMap');

class EventHanlder {
    constructor(slackApp) {
        this.slackApp = slackApp;
    }

    registerEvents() {
        Object.keys(eventMap).forEach(event => {
            this.slackApp.event(event, eventMap[event]);
        });
    }
}

module.exports = EventHanlder;