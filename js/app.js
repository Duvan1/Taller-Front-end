 (function() {
    var app = angular.module('BancoNac', []);

    app.controller('BancoController', ['$http', function($http){
      var banquito = this;
      banquito.datos = [];

      $http.get('http://www.titandesarrollo.com/_api/movimientos').success(function(data){
                banquito.datos = data;
          console.log(banquito.datos[0])
              });/*.then(function (data) {
            banquito.datos = data;
            console.log(banquito.datos[0]);

        },function (error){
            console.log(error, 'can not get data.');
        });*/
    }]);
})();


