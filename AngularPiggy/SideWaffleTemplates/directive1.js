(function() {
    'use strict';

    // TODO: replace app with your module name
    angular.module('app').directive('directive1', ['$window', directive1]);
    
    function directive1 ($window) {
        // Usage:
        // 
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();