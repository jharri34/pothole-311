/**
* @ngdoc object
* @name Navigation
* * @description 
* 
* - directive displays navigation bar
* - 
* 
*/
angular.module('pothole-311.directives').
directive('navigation', function() {
  return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'partials/navigation.html'
  };
});
