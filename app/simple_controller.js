var wdi = wdi || {};

wdi.demoApp = angular.module("demoApp", []);

wdi.MainController = function($scope) {
  $scope.welcome = "Hello folks!";
  $scope.students = ['Steve','Ashley', 'Amanda' ,'Graham','Amy','Joel', 'Calvin'];

};

wdi.AccountController = function($scope) {
  var minimum = 1000;
  $scope.my_balance = 1221.78;
  $scope.has_sufficient_funds = $scope.my_balance > minimum;
};

wdi.ExchangeController = function($scope, $location) {

  console.log($location.absUrl());

  $scope.$watch('euros', function(newVal, oldVal) {
    $scope.isNumber = !isNaN(newVal);
  });

  $scope.convert = function() {
    $scope.dollars = $scope.euros * 0.71;
  };
};
