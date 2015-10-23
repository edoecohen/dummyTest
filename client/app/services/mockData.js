(function () {

  angular
    .module('app')
    .factory('MockData', MockData);

  MockData.$inject = [];

  function MockData(){

    var service = { };

    service.data = [{ }];

    return service;
  }

}());

