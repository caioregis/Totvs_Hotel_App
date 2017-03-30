(function() {
	'use strict';

	angular.module('hotelSettings').controller('ManagementController', ManagementController);
    
    function ManagementController(managementService) {
        var vm = this;

        vm.save = save;

        function save(hotel, newHotelForm) {
        	if(newHotelForm.$valid) {

        		console.log(hotel);

        		try {
	                //pegar ultimo id do evento
	                managementService.getAllHotels().$promise
	                    .then(function(data) {

	                    	if(data.length == 0) {
	                    		hotel.id = 1;
	                    	} else {
	                    		var lastRegister = data[data.length - 1];
	                        	hotel.id = lastRegister.id + 1;	
	                    	}

	                        managementService.save(hotel)
	                            .$promise
	                            .then(function(response) { 
	                            	console.log('success', response);
	                            	vm.success = "Hotel cadastrado com sucesso";
	                            	newHotelForm.$pristine;
	                            })
	                            .catch(function(response) { 
	                            	console.log('save failure', response);
	                            	vm.erro = "Falha ao cadastrar o Hotel";
	                            });
	                    })
	                    .catch(function(response) { console.log('getAll failure', response)});;

                } catch(e) {
                	console.log(e);
                }
            }
        }
    }
}());