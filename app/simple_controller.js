// 1) Create an app module, once. It's the name of your application
var demoApp = angular.module("demoApp", []);

// 2) Attach controller to the app module
demoApp.controller('SimpleController', function($scope) {
  // @welcome = "Hello Folks!";
  $scope.welcome = "Hello folks!";
  $scope.students = ['Yoni','James', 'Yin' ,'Matt','Tim','Joe', 'Jack', 'Pete', 'Melody', 'David', 'Jacob'];
  // minimum = 1000;
  var minimum = 1000;
  $scope.my_balance = 1221.78;
  $scope.hasSufficientFunds = $scope.my_balance > minimum;
  $scope.hasSufficientFundsFunction = function(){
  	return $scope.my_balance > minimum;
  }

});
