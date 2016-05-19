'use strict';

var todoApp = angular.module('todoApp', ['ngRoute', 'todo-services']);

todoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      controller: 'TodoCtrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }
]);

todoApp.controller('TodoCtrl', ['$scope', '$rootScope', 'TodoService', function($scope, $rootScope, TodoService) {
  $scope.todos = [];
  $scope.newTodo = {value: ''};

  TodoService.getTodos()
    .then( function(todos) {
      $scope.todos = todos;
    })
    .catch( function( error ){
      console.log( error );
    });

  $scope.addTodo = function() {
    TodoService.addTodo($scope.newTodo)
      .then(function( addedTodo ) {
        console.log( addedTodo );
        $scope.todos.push( addedTodo );
        $scope.newTodo = {value: ''};
      })
      .catch( function( error ){
        console.log( error );
      });

  };

  $scope.removeTodo = function(todo) {
    TodoService.removeTodo(todo)
      .then(function( deletedTodo ) {
        console.log( deletedTodo );
        $scope.todos.splice($scope.todos.indexOf(todo), 1);
      })
      .catch( function( error ){
        console.log( error );
      });

  }
}]);
