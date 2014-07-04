﻿(function () {
    var customersService = function () {
        var customers = [
            {
                id: 1,
                joined: '2000-12-02',
                name: 'John',
                city: 'Chandler',
                orderTotal: 9.9956,
                orders: [
                    {
                        id: 1,
                        product: 'Shoes',
                        total: 9.9956
                    }
                ]
            },
            {
                id: 2,
                joined: '1965-01-22',
                name: 'Wonton',
                city: 'Redmond',
                orderTotal: 19.99,
                orders: [
                    {
                        id: 2,
                        product: 'Baseball',
                        total: 3.9286
                    },
                    {
                        id: 3,
                        product: 'Bat',
                        total: 9.995
                    }
                ]
            },
            {
                id: 3,
                joined: '2000-12-02',
                name: 'Piggy',
                city: 'Chandler',
                orderTotal: 9.9956,
                orders: [
                    {
                        id: 4,
                        product: 'Kindle',
                        total: 9.9956
                    }
                ]
            }
        ];


        this.getCustomers = function () {
            return customers;
        };


        this.getCustomer = function (customerId) {
            for (var i = 0, len = customers.length; i < len; i++) {
                if (customers[i].id === parseInt(customerId)) {
                    return customers[i];
                }
            };

            return {};
        };
    };

    angular.module('customersApp').service('customersService', customersService);
})();