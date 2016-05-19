angular.module('todo-services',[]).service('TodoService', function($http, $q) {
  return {
    'getTodos': function() {
      return $http.get('/todo/getTodos').then( function(resp){
        return resp.data;
      });

    },
    'addTodo': function(todo) {
      return $http.post('/todo/addTodo', todo).then(function(resp){
          return resp.data;
        });
    },
    'removeTodo': function(todo) {
      return $http.post('/todo/removeTodo', todo).then(function(resp){
        return resp.data;
      });

    }
}});
