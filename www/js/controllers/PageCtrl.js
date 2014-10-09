/**
* @ngdoc object
* @name GuidelineCtrl
* @requires $scope
* @requires $routeParams
* @description 
* 
* Controller for Guideline pages
* - reads route params and selects which guideline stage to display
* - 
* 
*/
angular.module('peace-m.controllers').controller('PageCtrl',['$scope','$routeParams','fetchLearn',
function ($scope,$routeParams,fetchLearn){
    var pregnacy_stages = [	 
        {post_title:"Profile",post_type:"unimplemented"},
        {post_title:"Goals",post_type:"unimplemented"},
        {post_title:"Risk Factors",post_type:"unimplemented"},
        {post_title:"Routine Prenatal Care",post_type:"unimplemented"}];
    var learn_stages = [
        {post_title:"Prenatal Care",post_type:"unimplemented"},
        {post_title:"Common Concerns",post_type:"unimplemented"},
        {post_title:"Nutrition",post_type:"unimplemented"},
        {post_title:"Exercise",post_type:"unimplemented"}];
    var active_stages = [
        {post_title:"Calendar",post_type:"unimplemented"},
        {post_title:"Routine Visit",post_type:"unimplemented"},
        {post_title:"Routine Test",post_type:"unimplemented"}];
    var next_stages = [
        {post_title:"Pregnacy Spacing",post_type:"unimplemented"},
        {post_title:"Birth Control",post_type:"unimplemented"},
        {post_title:"Safe Sleep",post_type:"unimplemented"},
        {post_title:"WIC",post_type:"unimplemented"},
        {post_title:"Newborn Health",post_type:"unimplemented"},
        {post_title:"Mom Health",post_type:"unimplemented"}];
    if ($routeParams.id == "pregnancy")    
        $scope.stages = pregnacy_stages;
    if ($routeParams.id == "learn"){    
//        $scope.stages = learn_stages;
        fetchLearn.getLearn().then(function(data){
            $scope.stages = data;
        });   
    }
    if ($routeParams.id == "active")    
        $scope.stages = active_stages;
    if ($routeParams.id == "next")    
        $scope.stages = next_stages;
    
}])
