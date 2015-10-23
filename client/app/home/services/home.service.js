(function () {

  function HomeService(){

    var service = { };
    
    return service;

  }
  
  angular
    .module('app.home')
    .factory('HomeService', HomeService);

  HomeService.$inject = [];

}());

