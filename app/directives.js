//directive
demoApp.directive('formattedAddress', function() {
  return {

    scope: {
      address: '=address'
    },
    restrict: "E",
    replace: true,
    templateUrl: "app/partials/formatted_address.html"

  };
});