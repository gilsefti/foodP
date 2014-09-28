var externalServices = angular.module('externalServices', []);


externalServices.service('locations', function() {
    this.getLocations = function() {
        var locations = [{
            ID: 1,
            location: "Tiomkin 2, Tel aviv"
        }, {
            ID: 2,
            location: "Rotshild 3, Tel aviv"
        }];
        return locations;
    };
});


externalServices.service('dishes', function() {
    this.getDishes = function() {
        var dishes = [{
            ID: 1,
            name: "Israeli breakfast"
        }, {
            ID: 2,
            name: "American breakfast"
        }];
        return dishes;
    };
});