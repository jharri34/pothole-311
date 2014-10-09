/**
* @ngdoc service
* @name FetchLearn
* @requires $http
* @requires $q
* @description
* - fetches learn view from the server
*/
angular.module('peace-m.components').factory('fetchLearn', ['$http','$q',function ($http,$q) {
     var deferrred = $q.defer();
     fetchLearn = function() { 
        $http.get('http://peace-m.org/view/learn/').success(function(data,status,headers,config) {
            deferrred.resolve(data);
        });
     }
   
     return {
        getLearn: function() {
            fetchLearn();
            return deferrred.promise;
        }
    
  };
}])