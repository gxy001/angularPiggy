﻿var express = require('express'),
    app = express();

app.configure(function () {
    app.use(express.static(__dirname, '/'));
})

app.get('/customers/:id', function (req, res) {
    var customerId = parseInt(req.params.id);
    var data = [];
    for (var i = 0, len = customers.length; i < len; i++) {
        if (customers[i].id === customerId) {
            data = customers[i];
            break;
        }
    }
    res.json(data);
})

app.get('/customers', function (req, res) {
    res.json(customers);
    //res.json(500, { error: 'An error has occured!' });
});

app.get('/orders', function (req, res) {
    var orders = [];
    for (var i = 0, len = customers.length; i < len; i++) {
        if (customers[i].orders) {
            orders.push.apply(orders, customers[i].orders);
        }
    }
    res.json(orders);
});

app.delete('/customers/:id', function (req, res) {
    var customerId = parseInt(req.params.id);
    var data = { status: false }
    for (var i = 0, len = customers.length; i < len; i++) {
        if (customers[i].id == customerId) {
            customers.splice(i, 1);
            data = { status: true };
            break;
        }
    }
    res.json(data);
});

app.listen(8080);

console.log('Express listening on port 8080');

var customers = [
            {
                id: 1,
                joined: '2008-12-02',
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