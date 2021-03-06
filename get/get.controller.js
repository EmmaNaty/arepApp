(function(){

	"use strict";

	angular
	// nombre del modulo al que va atado el controlador
		.module("arepApp")
			// es un controlador por modulo (es lo mejor)
			.controller("get_Controller", controladorGet);


	function controladorGet(arepa_Factory){
		// convierte a publicas todas las variables
		// ahora las variables se pueden acceder desde la vista (index.html)
		var vm = this;

		/*vm.arepaObj = 
			{

			};*/

		vm.arepas = [];

		vm.get = function(){
			//console.log("get fn");
	 		var promise = arepa_Factory.get();	
	 		promise.then(function(response){
	 			vm.arepas = response;
	 			console.log(vm.arepas);
	 		});	

	 		promise.catch(function(response_er){ // error
	 			console.log(response_er);

	 		});	
	 	}


	}

})();