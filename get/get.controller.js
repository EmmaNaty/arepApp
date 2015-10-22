(function(){

	"use strict";

	angular
		.module("arepApp")
			.controller("get_Controller", controladorGet);


	function controladorGet(arepa_Factory){
		var vm = this;

		vm.get = function(){
	 		arepa_Factory.get();
	 		
	 	}

	}

})();