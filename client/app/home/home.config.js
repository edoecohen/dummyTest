(function() {
    'use strict';

    angular
	    .module('app.home', [
        'app.core'
      ])

	    .config(['$stateProvider', function($stateProvider) {
	      
	      $stateProvider
	      .state('home', {
	        url: '/',
	        views: {
	        	'': {
	    		    templateUrl: 'client/app/layout/shell.html',
	    		    controller: 'ShellController',
	            controllerAs: 'vm'
	        	},
	          'main@home': {
	            templateUrl: 'client/app/home/home.html',
	            controller: 'HomeController',
	            controllerAs: 'vm'
	          }
	        }
	      });
	    }]);
})();
