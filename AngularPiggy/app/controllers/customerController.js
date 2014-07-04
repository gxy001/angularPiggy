(function () {
    var CustomersController = function ($scope, $log, customersFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        function init() {
            customersFactory.getCustomers()
                .success(function (customers) {
                    $scope.customers = customers;
                })
                .error(function (data, status, headers, config) {
                    //handle error
                    $log.log(data.error + ' ' + status);
                });
        }

        init();

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

        $scope.deleteCustomer = function (customerId) {
            customersFactory.deleteCustomer(customerId)
                .success(function (status) {
                    if (status) {
                        for (var i = 0, len = $scope.customers.length; i < len; i++) {
                            if ($scope.customers[i].id === customerId) {
                                $scope.customers.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else {
                        $window.alert('Unable to delete customer');
                    }
                })
                .error(function (data, status, headers, config) {
                    //error handling
                })
        };
    };

    CustomersController.$inject = ['$scope', '$log', 'customersFactory', 'appSettings'];

    angular.module('customersApp').controller('CustomersController', CustomersController);
}());

//(function () {
//    var CustomersController = function ($scope, customersService, appSettings) {
//        $scope.sortBy = 'name';
//        $scope.reverse = false;
//        $scope.customers = [];
//        $scope.appSettings = appSettings;

//        function init() {
//            $scope.customers = customersService.getCustomers();
//        }

//        init();

//        $scope.doSort = function (propName) {
//            $scope.sortBy = propName;
//            $scope.reverse = !$scope.reverse;
//        };
//    };

//    CustomersController.$inject = ['$scope', 'customersService', 'appSettings'];

//    angular.module('customersApp').controller('CustomersController', CustomersController);
//}());

//(function () {
//    var CustomersController = function ($scope, customersFactory, appSettings) {
//        $scope.sortBy = 'name';
//        $scope.reverse = false;
//        $scope.customers = [];
//        $scope.appSettings = appSettings;

//        function init() {
//            $scope.customers = customersFactory.getCustomers();
//        }

//        init();

//        $scope.doSort = function (propName) {
//            $scope.sortBy = propName;
//            $scope.reverse = !$scope.reverse;
//        };
//    };

//    CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings'];

//    angular.module('customersApp').controller('CustomersController', CustomersController);
//}());

//(function () {
//    var CustomersController = function ($scope) {
//        $scope.sortBy = 'name';
//        $scope.reverse = false;
//        $scope.customers = [
//            {
//                id: 1,
//                joined: '2000-12-02',
//                name: 'John',
//                city: 'Chandler',
//                orderTotal: 9.9956,
//                orders: [
//                    {
//                        id: 1,
//                        product: 'Shoes',
//                        total: 9.9956
//                    }
//                ]
//            },
//            {
//                id: 2,
//                joined: '1965-01-22',
//                name: 'Wonton',
//                city: 'Redmond',
//                orderTotal: 19.99,
//                orders: [
//                    {
//                        id: 2,
//                        product: 'Baseball',
//                        total: 3.9286
//                    },
//                    {
//                        id: 3,
//                        product: 'Bat',
//                        total: 9.995
//                    }
//                ]
//            },
//            {
//                id: 3,
//                joined: '2000-12-02',
//                name: 'Piggy',
//                city: 'Chandler',
//                orderTotal: 9.9956,
//                orders: [
//                    {
//                        id: 4,
//                        product: '',
//                        total: 9.9956
//                    }
//                ]
//            }];

//        $scope.doSort = function (propName) {
//            $scope.sortBy = propName;
//            $scope.reverse = !$scope.reverse;
//        };
//    };

//    CustomersController.$inject = ['$scope'];

//    angular.module('customersApp').controller('CustomersController', CustomersController);
//}());

//Option 3 - minification #3
//(function () {
//    CustomersController.$inject = ['$scope', 'foo', 'bar'];
//    function CustomersController($scope, foo, bar) {
//        $scope.sortBy = 'name';
//        $scope.reverse = false;
//        $scope.customers = [
//            { joined: '2000-12-02', name: 'John', city: 'Chandler', orderTotal: 9.9956 },
//            { joined: '1965-01-22', name: 'Wonton', city: 'Redmond', orderTotal: 3.9286 },
//            { joined: '2000-12-02', name: 'Piggy', city: 'Chandler', orderTotal: 9.9956 }];
//        $scope.doSort = function (propName) {
//            $scope.sortBy = propName;
//            $scope.reverse = !$scope.reverse;
//        };
//    }
    
//    angular.module('customersApp').controller('CustomersController', CustomersController);
//}());

//Option 3 - minification #2
//(function () {
//    var CustomersController = function ($scope) {
//        $scope.sortBy = 'name';
//        $scope.reverse = false;
//        $scope.customers = [
//            { joined: '2000-12-02', name: 'John', city: 'Chandler', orderTotal: 9.9956 },
//            { joined: '1965-01-22', name: 'Wonton', city: 'Redmond', orderTotal: 3.9286 },
//            { joined: '2000-12-02', name: 'Piggy', city: 'Chandler', orderTotal: 9.9956 }];
//        $scope.doSort = function (propName) {
//            $scope.sortBy = propName;
//            $scope.reverse = !$scope.reverse;
//        };
//    }

//    CustomersController.$inject = ['$scope'];

//    angular.module('customersApp').controller('CustomersController', CustomersController);
//}());

//Option 3 - minification #1
//(function () {
//    var CustomersController = function ($scope, foo, bar) {
//        $scope.sortBy = 'name';
//        $scope.reverse = false;
//        $scope.customers = [
//            { joined: '2000-12-02', name: 'John', city: 'Chandler', orderTotal: 9.9956 },
//            { joined: '1965-01-22', name: 'Wonton', city: 'Redmond', orderTotal: 3.9286 },
//            { joined: '2000-12-02', name: 'Piggy', city: 'Chandler', orderTotal: 9.9956 }];
//        $scope.doSort = function (propName) {
//            $scope.sortBy = propName;
//            $scope.reverse = !$scope.reverse;
//        };
//    }
//        angular.module('customersApp').controller('CustomersController', ['$scope', 'foo', 'bar', CustomersController]);
//}());

//Option 2
//(function () {
//    angular.module('customersApp').controller('CustomersController', function ($scope) {
//        $scope.sortBy = 'name';
//        $scope.reverse = false;
//        $scope.customers = [
//            { joined: '2000-12-02', name: 'John', city: 'Chandler', orderTotal: 9.9956 },
//            { joined: '1965-01-22', name: 'Wonton', city: 'Redmond', orderTotal: 3.9286 },
//            { joined: '2000-12-02', name: 'Piggy', city: 'Chandler', orderTotal: 9.9956 }];
//        $scope.doSort = function (propName) {
//            $scope.sortBy = propName;
//            $scope.reverse = !$scope.reverse;
//        }
//    });
//}());

//Option 1
//app.controller('CustomersController', function ($scope) {
//    $scope.sortBy = 'name';
//    $scope.reverse = false;
//    $scope.customers = [
//        { joined: '2000-12-02', name: 'John', city: 'Chandler', orderTotal: 9.9956 },
//        { joined: '1965-01-22', name: 'Wonton', city: 'Redmond', orderTotal: 3.9286 },
//        { joined: '2000-12-02', name: 'Piggy', city: 'Chandler', orderTotal: 9.9956 }];
//    $scope.doSort = function (propName) {
//        $scope.sortBy = propName;
//        $scope.reverse = !$scope.reverse;
//    }
//});

//function CustomersController($scope) {
//    $scope.sortBy = 'name';
//    $scope.reverse = false;
//    $scope.customers = [
//        { joined: '2000-12-02', name: 'John', city: 'Chandler', orderTotal: 9.9956 },
//        { joined: '1965-01-22', name: 'Wonton', city: 'Redmond', orderTotal: 3.9286 },
//        { joined: '2000-12-02', name: 'Piggy', city: 'Chandler', orderTotal: 9.9956 }];
//    $scope.doSort = function (propName) {
//        $scope.sortBy = propName;
//        $scope.reverse = !$scope.reverse;
//    }
//}