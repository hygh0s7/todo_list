var db = require("../models");

var error = function(err) {
  res.send(err);
};

exports.getTodos = function(req, res) {
  db.Todo.find()
    .then(function(todos) {
      res.json(todos);
    })
    .catch(error);
};

exports.createTodo = function(req, res) {
  db.Todo.create(req.body)
    .then(function(newTodo) {
      res.status(201).json(newTodo);
    })
    .catch(error);
};

exports.getTodo = function(req, res) {
  db.Todo.findById(req.params.todoId)
    .then(function(foundTodo) {
      res.json(foundTodo);
    })
    .catch(error);
};

exports.updateTodo = function(req, res) {
  db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
    .then(function(todo) {
      res.json(todo);
    })
    .catch(error);
};

exports.deleteTodo = function(req, res) {
  db.Todo.remove({ _id: req.params.todoId })
    .then(function() {
      res.send("Todo deteted!");
    })
    .catch(error);
};

module.exports = exports;
