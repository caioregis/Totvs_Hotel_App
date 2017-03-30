(function() {
    'use strict';

    angular.module('hotelSettings').factory('managementService', ManagementService);

    function ManagementService($resource) {
        var resource = $resource('/data/hotels/:id', {id:'@id'});

        return {
            save: function(hotel) {
                return resource.save(hotel);
            },
            getAllHotels: function() {
                return resource.query();
            }
        };
    }

}());