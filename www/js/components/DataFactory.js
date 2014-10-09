/**
* @ngdoc service
* @name DataFactory
* @requires $http
* @requires $q
* @description
* - fetches data from server
*/
angular.module('peace-m.factories').factory('dataFactory', ['$http','$q',function ($http,$q) {
     var deferrred = $q.defer();
     
     fetchDashboard = function() { 
        $http.get('http://peace-m.org/view/dashboard/').success(function(data,status,headers,config) {
            deferrred.resolve(data);
        });
     }
   
     return {
        getDashboard: function() {
            fetchDashboard();
            return deferrred.promise;
        }
        
  };
}])