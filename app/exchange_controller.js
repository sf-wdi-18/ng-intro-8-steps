wdi.ExchangeController = function($scope) {
  $scope.$watch('euros', function(newVal, oldVal) {
    $scope.isNumber = !isNaN(newVal);
  });

  $scope.convert = function() {
    $scope.dollars = $scope.euros * 0.71;
  };
};