const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Todo.remove({}).then((result) => {
//   console.log(result);
// }).catch((e) => console.log(e));

Todo.findByIdAndRemove('59f51e55e85157132a21f35b').then((todo) => {
  console.log(todo);
});
