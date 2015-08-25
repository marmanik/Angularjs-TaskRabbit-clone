'use strict';

describe('Controller: BrowseCtrl', function () {

  // load the controller's module
  beforeEach(module('taskBerryApp'));

  var BrowseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BrowseCtrl = $controller('BrowseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BrowseCtrl.awesomeThings.length).toBe(3);
  });
});
