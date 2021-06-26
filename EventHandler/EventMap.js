const { onAppHomeOpened } = require('./Events/AppEvents');

const eventMap = {
    'app_home_opened': onAppHomeOpened
};

module.exports = {
    eventMap
};