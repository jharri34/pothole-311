/**
* @ngdoc service
* @name FetchDashboard
*     
* @requires $http
* @requires $q
* @returns {http promise} asynchronously loads and return http object
* @description
* - fetches fetches dashboard  content
* 
*/
angular.module('peace-m.components').factory('fetchDashboard', ['$http','$q',function ($http,$q) {
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