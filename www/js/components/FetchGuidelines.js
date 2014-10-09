/**
* @ngdoc service
* @name FetchGuideline
* @requires $http
* @requires $q
* @description
* - fetches data from server
*/
angular.module('peace-m.components').factory('fetchGuidelines', ['$http','$q',function ($http,$q) {
    
     fetchGuideline = function(guideline) { 
     var deferrred = $q.defer();

         $http.get('http://peace-m.org/guideline/'+guideline).success(function(data,status,headers,config) {
            data.post_content = Encoder.htmlDecode(data.post_content);
            for (section in data.sections) { 
               section.post_content = Encoder.htmlDecode(section.post_content);   
            }
            deferrred.resolve(data);
        });
         
         return deferrred.promise;
     }
   
     return {
        getGuideline: function(guideline) {
            return fetchGuideline(guideline);  
        }
    
  };
}])