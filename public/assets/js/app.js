var app = angular.module('App', [
  'ui.router',
  'ui.bootstrap',
  'noToolbox'
])

.run([
  '$rootScope',
  '$state',
  '$stateParams',
  function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }
])

.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
  }
])

.controller('AppCtrl', [
  '$scope',
  '$rootScope',
  function($scope, $rootScope) {

  }
]);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['App']);
});