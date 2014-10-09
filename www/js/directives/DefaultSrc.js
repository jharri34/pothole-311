angular.module('peace-m.directives')
    .directive('defaultSrc', function () {

        return {
            link: function postLink(scope, iElement, iAttrs) {
                iElement.bind('error', function () {
                    angular.element(this).attr("src", iAttrs.defaultSrc);
                });
            }
        };
    });