/**
* @ngdoc service
* @name HtmlFilter
* @requires $sce
* 
* @description
* - $sce is a service that provides Strict Contextual Escaping services to AngularJS.
* - 
* - Strict Contextual Escaping (SCE) is a mode in which AngularJS requires bindings 
* - in certain contexts to result in a value that is marked as safe to use for that context.
* - 
* - in short, to_trusted allows dynamically added HTML 
* - 
*/
angular.module('peace-m.filters')
.filter('to_trusted',['$sce', function($sce){
                        return function(text){
                            return $sce.trustAsHtml(text);
                      };
                    }]);