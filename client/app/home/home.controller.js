(function() {
    'use strict';

    function HomeController($scope) {

      var vm = this;

      function generateDummyTest(index) {
      	vm.statuses.running++;
        var delay = 7000 + Math.random() * 7000;
        var testPassed = Math.random() > 0.5;
        vm.tests[index].result = 2;

        return function(callback) {
          setTimeout(function() {
            callback(testPassed, index);
          }, delay);
        };
      };

      vm.callback = function(status, index) {
      	vm.statuses.running--;
      	if(status === true)	{
      		vm.statuses.passed++;
      		vm.tests[index].result = 3;
      	}
      	if(status === false) {
      		vm.statuses.failed++;
      		vm.tests[index].result = 4;
      	}
      	vm.statuses.total++;
      	$scope.$apply()
      };


      vm.statuses = {
      	running: 0,
      	passed: 0,
      	failed: 0,
      	total: 0
      }

      vm.tests = [
        { description: "commas are rotated properly",          run: generateDummyTest, result: 1 },
        { description: "exclamation points stand up straight", run: generateDummyTest, result: 1 },
        { description: "run-on sentences don't run forever",   run: generateDummyTest, result: 1 },
        { description: "question marks curl down, not up",     run: generateDummyTest, result: 1 },
        { description: "semicolons are adequately waterproof", run: generateDummyTest, result: 1 },
        { description: "capital letters can do yoga",          run: generateDummyTest, result: 1 }
      ];
      
    };

    angular
      .module('app.home')
      .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

})();
