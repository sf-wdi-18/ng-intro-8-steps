// 1) Create an app module, once. It's the name of your application
//var demoApp = angular.module("demoApp", []);

// 2) Attach controller to the app module
demoApp.controller('SimpleController', function($scope) {
  // @welcome = "Hello Folks!";
  $scope.welcome = "Hello folks!";
  $scope.students = ['Yoni','James', 'Yin' ,'Matt','Tim','Joe', 'Jack', 'Pete', 'Melody', 'David', 'Jacob'];
  
  // d = new Date()
  // d.setDate(d.getDate() - 1)
  $scope.aDate = new Date();

  // minimum = 1000;
  var minimum = 1000;
  $scope.my_balance = 1221.78;
  $scope.hasSufficientFunds = $scope.my_balance > minimum;


	$scope.berlin_address = {
	  addressLine1: 'Motz Strasse 29',
	  addressLine2: '',
	  city: 'Berlin',
	  state: 'Berlin',
	  postalCode: '10781',
	  country: 'Germany'
	};

	$scope.sf_address = {
	  addressLine1: '714 Guerrero',
	  addressLine2: '',
	  city: 'San Francisco',
	  state: 'CA',
	  postalCode: '94110',
	  country: 'USA'
	};

});
