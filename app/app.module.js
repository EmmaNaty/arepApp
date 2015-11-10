(function(){

	// para que no se me permita usar codificacion errada 
	"use strict"

	angular
		.module("arepApp", ["ui.router"])
			.config(function($stateProvider, $urlRouterProvider) {
		          //
		          // For any unmatched url, redirect to /state1
		          $urlRouterProvider.otherwise("/crear");
		          //
		          // Now set up the states
		          $stateProvider
		            .state('crear', {
		              url: "/crear",
		              templateUrl: "./create/create.html",
		              controller: "create_Controller as controladorC",
		              
		            })
		            .state('ver', {
		              url: "/ver",
		              templateUrl: "./get/get.html",
		              controller: "get_Controller as controladorG",
		              
		            })
		            .state('editar', {
		              url: "/editar",
		              templateUrl: "./edit/edit.html",
		              controller: "edit_Controller as controladorE",
		              
		            })
	        });


})();




