// Service
module.exports = {
  getTodos: function(next) {
    Todo.find().exec(function(err, todos) {
      if(err) throw err;
      next(todos);
    });
  },
  addTodo: function(todoVal, next) {
    Todo.create({value: todoVal}).exec(function(err, todo) {
      if(err) throw err;
      next(todo);
    });
  },
  removeTodo: function(todoVal, next) {
    // need to insert id
    Todo.destroy({id: todoVal}).exec(function(err, todo) {
      if(err) throw err;
      next(todo);
    });
  }
};
