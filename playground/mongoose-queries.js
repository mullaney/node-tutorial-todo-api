const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// var id = '59f4ebe7ee6f77117ef1335411';

// if (!ObjectID.isValid(id)) {
//   console.log("ID is not valid)");
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('All todos:', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('One todo:', todo);
// });

// Todo.findById(id).then((todo) => {
//   console.log('Todo by ID:', todo);
// }).catch((e) => console.log(e));

var userId = '59f3aaffbb73d00ac2d0c95f';

if (!ObjectID.isValid(userId)) {
  console.log('userId is not valid.');
} else {
  User.findById(userId).then((user) => {
    if(!user) {
      console.log("User not found");
    } else {
      console.log(JSON.stringify(user, undefined, 2));
    }
  }).catch((e) => console.log(e));
}