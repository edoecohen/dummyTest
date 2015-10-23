'use strict';

describe('Home - PlayerController', function(){
    var scope;//we'll use this scope in our tests
    var controller;
 
    //mock Application to allow us to inject our own dependencies
    beforeEach(angular.mock.module('app'));
    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        controller = $controller('PlayerController', {$scope: scope});
    }));

    // tests start here
    it('should be created successfully', function () {
        expect(controller).toBeDefined();
    });

    it('should have an attritube named "model"', function() {
      expect(controller.model).not.toBeUndefined();
    });

});
