(function () {
    var OrdersController = function ($scope, $routeParams, customersFactory) {
        var customerId = $routeParams.customerId;
        $scope.customer = null;

        function init() {
            customersFactory.getCustomer(customerId)
                .success(function (customer) {
                    $scope.customer = customer;
                })
                .error(function (data, status, header, config) {
                    //error handling
                });
        }

        init();

    }

    OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

    angular.module('customersApp').controller('OrdersController', OrdersController);
}());

//(function () {
//    var OrdersController = function ($scope, $routeParams, customersService) {
//        var customerId = $routeParams.customerId;
//        $scope.customer = null;

//        function init() {
//            $scope.customer = customersService.getCustomer(customerId);
//        }

//        init();

//    }

//    OrdersController.$inject = ['$scope', '$routeParams', 'customersService'];

//    angular.module('customersApp').controller('OrdersController', OrdersController);
//}());

//(function () {
//    var OrdersController = function ($scope, $routeParams, customersFactory) {
//        var customerId = $routeParams.customerId;
//        $scope.customer = null;

//        function init() {
//            $scope.customer = customersFactory.getCustomer(customerId);
//        }

//        init();

//    }

//    OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

//    angular.module('customersApp').controller('OrdersController', OrdersController);
//}());

//(function () {
//    var OrdersController = function ($scope, $routeParams, customersFactory) {
//        var customerId = $routeParams.customerId;
//        $scope.customer = null;

//        function init() {
//            $scope.customer = customersFactory.getCustomer(customerId);
//        }

//        init();

//    }

//    OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

//    angular.module('customersApp').controller('OrdersController', OrdersController);
//}());

//(function () {
//    var OrdersController = function ($scope, $routeParams) {
//        var customerId = $routeParams.customerId;
//        $scope.orders = null;

//        function init() {
//            for (var i = 0, len = $scope.customers.length; i < len; i++) {
//                if ($scope.customers[i].id === parseInt(customerId)) {
//                    $scope.orders = $scope.customers[i].orders;
//                    break;
//                }
//            }
//        }

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
//                        product: 'Kindle',
//                        total: 9.9956
//                    }
//                ]
//            }
//        ];

//        init();
//    };

//    OrdersController.$inject = ['$scope','$routeParams'];

//    angular.module('customersApp').controller('OrdersController', OrdersController);
//}());