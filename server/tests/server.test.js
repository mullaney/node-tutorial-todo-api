const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [
  {
    _id: new ObjectID(),
    text: 'first todo'
  }, {
    _id: new ObjectID(),
    text: 'second todo'
  }, {
    _id: new ObjectID(),
    text: 'third todo'
  }
];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';
    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if(err) {
          return done(err);
        }

        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create a new todo with invalid data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if(err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(3);
          done();
        }).catch((e) => done(e));
      });
  })
});

describe('GET /todos', () => {
  it('should get all the existing todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(3);
      })
      .end(done);
  });
});

describe('GET /todos/:id', () => {
  it('should get an existing todo by id', (done) => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(todos[0].text);
      })
      .end(done);
  });

  it('should return 404 if todo not found', (done) => {
    var id = new ObjectID;
    request(app)
      .get(`/todos/${id.toHexString()}`)
      .expect(404)
      .end(done)
  });

  it('should return 404 if non-object ids', (done) => {
    request(app)
      .get(`/todos/123`)
      .expect(404)
      .end(done)
  });
});

describe('DELETE /todos/:id', () => {
  it('should delete an existing todo by id', (done) => {
    request(app)
      .delete(`/todos/${todos[2]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.id).toBe(todos[2].id);
      })
      .end((err, res) => {
        if(err) {
          return done(err);
        }

        Todo.findById(todos[2].id).then((todo) => {
          expect(todo).toNotExist();
          done();
        }).catch((e) => done(e));
      });
  });

  it('should return a 404 if the todo does not exist', (done) => {
    var id = new ObjectID;
    request(app)
      .delete(`/todos/${id.toHexString()}`)
      .expect(404)
      .end(done)
  });

  it('should return a 404 if the id is not valid', (done) => {
    var id = '123abc';
    request(app)
      .delete(`/todos/${id}`)
      .expect(404)
      .end(done)
  });
});
