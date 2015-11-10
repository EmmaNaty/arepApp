(function() {
	"use strict";
	angular
		.module("arepApp")
			//las factory sirven paar la comuncacion con un servidor	
			// es una sola factory por toda la app	
			.factory("arepa_Factory", arepa_Factory)

			function arepa_Factory($http, $q){ // $q = liberia de promesas				

				var _arepa_Factory_ = {};

				//solicitud del metodo get al servidor
				_arepa_Factory_.get = function(){

					var deferred = $q.defer(); 

					//$http.get('http://192.168.1.206:9000/api/arepas')
					$http.get('http://tappsiweb2.cloudapp.net:9000/api/arepas')
					// si la peticion es exitosa muestre en consola lo que responde el servidor
							.success(function(response){
	 							//console.log(response); // devuelve repsuesta del servidor
	 							deferred.resolve(response);
	 						})
	 						.error(function(er){
	 							deferred.reject(er);
	 						});

	 				return deferred.promise;

				}	
				_arepa_Factory_.create = function(arepaObj){
					console.log(arepaObj);
					//$http.post('http://192.168.1.206:9000/api/arepas', arepaObj);
					$http.post('http://tappsiweb2.cloudapp.net:9000/api/arepas', arepaObj);
				}

				_arepa_Factory_.edit = function(arepaUpdate){
					//$http.put('http://192.168.1.206:9000/api/arepas')
					console.log(arepaUpdate);
					$http.put('http://tappsiweb2.cloudapp.net:9000/api/arepas/' + arepaUpdate._id, arepaUpdate);
				}


				return _arepa_Factory_;
			}

})();