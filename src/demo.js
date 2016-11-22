import { $q, $interval } from './angular-exports';
import { isArray } from 'angular';

console.log('App init');

const AppController = ($scope) => {
  console.log('appController');

  $scope.successCount = 0;
  $scope.failureCount = 0;

  function testInterval () {
    let defer = $q.defer();
    const n = Math.round(Math.random());
    $scope.$apply(() => {
      n ? defer.resolve() : defer.reject();
    });

    return defer.promise;
  }

  function onSuccess () {
    $scope.successCount++;
  }

  function onFailure () {
    $scope.failureCount++;
  }

  $interval(() => {
    testInterval()
      .then(onSuccess)
      .catch(onFailure);
  }, 250 + Math.round(Math.random() * 750));
};
AppController.$inject = ['$scope'];

angular.module('app', [])
  .controller('appController', AppController);
