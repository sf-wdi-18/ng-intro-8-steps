var wdi = wdi || {};
wdi.demoApp = angular.module("demoApp", []);

// def class SimpleController
wdi.SimpleController = function($scope) {

  // @welcome = "Hello Folks!";
  $scope.welcome = "Hello folks!";
  $scope.students = ['Steve','Ashley', 'Amanda' ,'Graham','Amy','Joel', 'Calvin'];

  // minimum = 1000;
  var minimum = 1000;
  $scope.my_balance = 1221.78;
  $scope.hasSufficientFunds = $scope.my_balance > minimum;
};

