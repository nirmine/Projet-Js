myApp.controller('HomeController', ["$scope", "$state",

  function($scope, $state) {

    console.log('this is the homecontroller, hi!');


    $scope.gotologin = function() {
      $state.go("login");
    }

    $scope.gotofriends = function () {
      $state.go("friends");
    }

    $scope.gotoprograms = function () {
      $state.go("programs");
    }

  }
]);




