/**
* @ngdoc object
* @name router
* @requires $routeProvider
* @description 
* - defines routes 
*/
angular.module('peace-m').config(function($routeProvider){
    $routeProvider.
        when("/", {templateUrl:"partials/dashboard.html", controller:"DashboardCtrl"}).
        when("/app-view/:id",{templateUrl:"partials/dashboard.html", controller:"PageCtrl"}).
        when("/guideline/:id",{templateUrl:"partials/guideline.html", controller:"GuidelineCtrl"}).
        otherwise({ redirectTo: '/' })
})