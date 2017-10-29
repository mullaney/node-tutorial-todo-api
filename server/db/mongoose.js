var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var uristring =
  process.env.MONGODB_URI ||
  'mongodb://localhost:27017/TodoApp';
mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

module.exports = { mongoose };
