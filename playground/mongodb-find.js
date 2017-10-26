const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('ToDos').find({
  //   _id: new ObjectID('59f2651118670f74aaf186e1')
  // }).toArray().then((docs) => {
  //   console.log('ToDos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch todos", err);
  // });

  // db.collection('ToDos').find().count().then((count) => {
  //   console.log(`ToDos count: ${count}`);
  // }, (err) => {
  //   console.log("Unable to fetch todos", err);
  // });
  db.collection('Users').find({name: 'Kevin'}).count().then((count) => {
    console.log(`Users count: ${count}`);
  }, (err) => {
    console.log("Unable to fetch Users", err);
  });
  // db.close();
});