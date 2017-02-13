(function () {
  'use strict';

  // Needs controller
  angular
    .module('needs')
    .controller('NeedsController', NeedsController);

  NeedsController.$inject = ['$scope', '$state', '$window', '$http','Authentication', 'needResolve'];

  function NeedsController ($scope, $state, $window, $http, Authentication, need) {
    var vm = this;

    vm.authentication = Authentication;
    vm.need = need;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Need
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.need.$remove($state.go('needs.list'));
      }
    }

    // Save Need
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.needForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.need._id) {
        vm.need.$update(successCallback, errorCallback);
      } else {
        vm.need.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('needs.view', {
          needId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }

    $scope.findone = function (need){
      $scope.need = need.get({ //changed Needs.get to need.get to fix an undefined bug
        needID: $state.needId
      });
    };

     $scope.signUp = function(need) {
      var frm = $scope.signUpData;
      var msg = frm.name + ' has requested to volunteer for ' + vm.need.name + ', item: [' + vm.need._id + ']';

      $http.post('/email',{
        name: frm.name,
        email: frm.email,
        message: msg
      }).
      success(function(response) {
        // 
        console.log('Success - sent email!');

      }).error(function(response) {
        console.log('Oops - no sendie email!');
      });
    };
  }
}());
