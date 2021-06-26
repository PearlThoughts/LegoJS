const { MessageRepository } = require('../../Repositories');

const onAppHomeOpened = async({ event, say }) => {
    const repository = new MessageRepository();
    const { message } = await repository.first();
    say(`${message}`);
};

module.exports = {
    onAppHomeOpened
};