const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany

  // db.collection('ToDos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('ToDos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  // findOne and Delete
  // db.collection('ToDos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  //ObjectId("59f2628710fd2903d4f2c2b0")

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('59f2628710fd2903d4f2c2b0')
  }).then((result) => {
    console.log(result);
  });
  db.collection('Users').deleteMany({
    name: 'Kevin'
  }).then((result) => {
    console.log(result);
  });


  // }).toArray().then((docs) => {
  //   console.log('ToDos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch todos", err);
  // });




  // db.close();
});