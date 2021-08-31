const { onAppHomeOpened, onMention } = require('./Events/AppEvents');

const eventMap = {
    app_home_opened: onAppHomeOpened,
    app_mention: onMention,
};

module.exports = {
    eventMap,
};
