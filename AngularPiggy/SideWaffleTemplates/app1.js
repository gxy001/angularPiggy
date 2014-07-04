(function () {
    'use strict';

    var id = 'app1';

    // TODO: Inject modules as needed.
    var app1 = angular.module('app1', [
        // Angular modules 
        'ngAnimate',        // animations
        'ngRoute'           // routing

        // Custom modules 

        // 3rd Party Modules
        
    ]);

    // Execute bootstrapping code and any dependencies.
    // TODO: inject services as needed.
    app1.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);
})();