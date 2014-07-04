function CustomersController() {
    this.sortBy = 'name';
    this.reverse = false;
    this.customers = [
        { joined: '2000-12-02', name: 'John', city: 'Chandler', orderTotal: 9.9956 },
        { joined: '1965-01-22', name: 'Wonton', city: 'Redmond', orderTotal: 3.9286 },
        { joined: '2000-12-02', name: 'Piggy', city: 'Chandler', orderTotal: 9.9956 }];
    this.doSort = function (propName) {
        this.sortBy = propName;
        this.reverse = !this.reverse;
    }
}