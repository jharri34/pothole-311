/**
* @ngdoc object
* @name GuidelineCtrl
* @requires $scope
* @requires $routeParams
* @description 
* 
* Controller for Guideline pages
* - Fetches Guideline content for Dashboard item and passes data to scope
* - 
* 
*/

angular.module('peace-m.controllers').controller('GuidelineCtrl',['$scope','$routeParams','$location','$sce','fetchGuidelines',function ($scope,$routeParams,$location,$sce,fetchGuidelines){
        
    fetchGuidelines.getGuideline($routeParams.id).then(function(data){
        $scope.guideline = data;
        if(typeof $scope.guideline.attachments[0] === 'undefined'){
            $scope.video_exists = false;
        }
        else{
            $scope.vide_exists = true;
        }
        $scope.config = {
            sources: [
                {src: $sce.trustAsResourceUrl($scope.guideline.attachments[0]), type: "video/mp4"}],
                theme: {
                    url: "lib/videogular-themes-default/videogular.css"
                        }
                    };
    });
    
$scope.toggleSelected =  function(id) {
    $scope.location = $location.path();
    $scope.select = true;
    $scope.current_view = id;
    }    
}]);
