const mongoose = require('mongoose');

const Message = mongoose.model('messages', { message: String });

module.exports = Message;