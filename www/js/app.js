/** 
* @ngdoc object
* @name app.js 
* @description 
* - module declaration 
* - namespace and dependencies managment  
*/
angular.module('peace-m',['peace-m.controllers','peace-m.components','peace-m.directives',]);
angular.module('peace-m.controllers', ['ngRoute','peace-m.components','peace-m.directives']);
angular.module('peace-m.directives',[]);
angular.module('peace-m.components',['peace-m.factories','peace-m.filters']);
angular.module('peace-m.factories',[]);
angular.module('peace-m.filters',[]);
