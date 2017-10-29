var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.evn.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };
