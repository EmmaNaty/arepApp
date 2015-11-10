(function(){

	"use strict";

	angular
	// nombre del modulo al que va atado el controlador
		.module("arepApp")
			// es un controlador por modulo (es lo mejor)
			.controller("create_Controller", controladorCreate);


	function controladorCreate(arepa_Factory){
		// convierte a publicas todas las variables
		// ahora las variables se pueden acceder desde la vista (index.html)
		var vm = this;

		vm.arepaObj = {};
		
	 	vm.create = function(value){
	 		arepa_Factory.create(value);	 		
	 	}
	 	
	}

})();