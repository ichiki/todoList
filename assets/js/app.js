'use strict';

var todoApp = angular.module('todoApp', ['ngRoute', 'todo-services']);

todoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
//      templateUrl: '/templates/todo.html',
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

  TodoService.getTodos().then(function(response) {
    console.log(response);
    $scope.todos = response;
  });

  $scope.addTodo = function() {
    console.log($scope.newTodo);
    TodoService.addTodo($scope.newTodo).then(function(response) {
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = {value: ''};
    });
  }

  $scope.removeTodo = function(todo) {
    TodoService.removeTodo(todo).then(function(response) {
      $scope.todos.splice($scope.todos.indexOf(todo), 1)
      console.log(response);
    });
  }
}]);
