const Message = require('../Models/Message');

class MessageRepository {

    async first() {
        return await Message.findOne();
    }
}

module.exports = MessageRepository;