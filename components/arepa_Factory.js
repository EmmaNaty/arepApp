(function() {
	"use strict";
	angular
		.module("arepApp")
			//comentario
			.factory("arepa_Factory", arepa_Factory)

			function arepa_Factory($http){

				var _arepa_Factory_ = {};

				_arepa_Factory_.get = function(){
					$http.get('http://192.168.1.204:9000/api/arepas')
							.success(function(response){
	 							console.log(response);
	 						});

				}	


				return _arepa_Factory_;
			}

})();