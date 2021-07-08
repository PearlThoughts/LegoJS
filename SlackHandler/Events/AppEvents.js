const { MessageRepository } = require('../../Repositories');

const onAppHomeOpened = async({ say }) => {
    const repository = new MessageRepository();
    const { message } = await repository.first();
    say(`${message}`);
};

const onMention = async({ say }) => {
    console.info("Mentioned");
    say(`:star:Thank You:star:`);
};

module.exports = {
    onAppHomeOpened,
    onMention
};