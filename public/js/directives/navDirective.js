angular.module('app', [])
  .directive('navDir', function () {
    return {
      restrict: 'E',
      template: "<h1>test</h1>"
      // templateUrl: "../../views/nav.html"
    }
  });
