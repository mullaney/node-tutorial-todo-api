const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('ToDos').findOneAndUpdate({
  //   _id: new ObjectID('59f2651118670f74aaf186e1')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  //ObjectId("59f243ca100dd9033b253103")
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59f243ca100dd9033b253103')
  }, {
    $set: { name: 'Kevin' },
    $inc: { age: 1 }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  // db.close();
});