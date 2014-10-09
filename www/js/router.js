angular.module('pothole-311').config(function($routeProvider){
    $routeProvider.
        when("/", {templateUrl:"partials/dashboard.html", controller:"DashboardCtrl"}).
        otherwise({ redirectTo: '/' })
})