const { whoAreYou } = require('./Commands');

const commandMap = {
    '/who_are_you': whoAreYou,
    '/hello': whoAreYou,
};

module.exports = {
    commandMap
};