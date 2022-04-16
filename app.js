(function () {
  "use strict";
  angular
    .module("myFirstApp", [])
    .controller("myFirstController", function ($scope) {
      $scope.name = "iman";
      $scope.sayHello = function () {
        return "Hello " + $scope.name;
      };
    });
})();
