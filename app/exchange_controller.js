demoApp.controller('ExchangeController', function($scope) {

  $scope.$watch('euros', function(newVal, oldVal) {
    $scope.isNumber = !isNaN(newVal);
  });

  $scope.convert = function() {
    $scope.dollars = $scope.euros * 1.24;
  };

});
