/**
* @ngdoc object
* @name Navigation
* * @description 
* 
* - directive displays navigation bar
* - 
* 
*/
angular.module('peace-m.directives').
directive('navigation', function() {
  return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'partials/navigation.html'
  };
});
