(function () {
    'use strict';

    var serviceId = 'factory1';

    // TODO: replace app with your module name
    angular.module('app').factory(serviceId, ['$http', factory1]);

    function factory1($http) {
        // Define the functions and properties to reveal.
        var service = {
            getData: getData
        };

        return service;

        function getData() {

        }

        //#region Internal Methods        

        //#endregion
    }
})();