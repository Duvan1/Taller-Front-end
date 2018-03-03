 (function() {
    var app = angular.module('BancoNac', []);

    app.controller('BancoController', ['$http', function($http){
      var banquito = this;
      banquito.datos = [];

      $http.get('http://www.titandesarrollo.com/_api/movimientos').then(function (response) {
            banquito.datos = data;
        },function (error){
            console.log(error, 'can not get data.');
        });/*success(function(data){
                banquito.datos = data;
              });*/
    }]);
})();


