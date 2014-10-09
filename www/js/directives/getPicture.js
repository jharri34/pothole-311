angular.module('peace-m.directives')
    .directive('getPicture', ['$window',
        function ($window) {
            return {
                restrict: 'A',
                link: function (scope, elem, attrs) {
                    elem.bind('click', function () {
                        navigator.camera.getPicture(onSuccess, onFail, {
                            quality: 50
                        });

                        function onSuccess(imageData) {
                            alert("wow");
                            $scope.imageSrc = "data:image/jpeg;base64," + imageData;
                        }

                        function onFail(message) {
                            alert('Failed because: ' + message);
                        }
                    });
                }
            };
    }]);