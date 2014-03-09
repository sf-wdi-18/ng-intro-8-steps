var wdi = wdi || {};

wdi.demoApp = angular.module("demoApp", []);

wdi.SimpleController = function($scope) {
  $scope.welcome = "Hello folks!";
  $scope.students = ['Steve','Ashley', 'Amanda' ,'Graham','Amy','Joel', 'Calvin'];

  var minimum = 1000;
  $scope.my_balance = 1221.78;
  $scope.hasSufficientFunds = $scope.my_balance > minimum;
};

