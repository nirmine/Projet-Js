myApp.controller('HomeController', ["$scope", "$state",

  function($scope, $state) {

    console.log('this is the homecontroller, hi!');


    $scope.gotologin = function() {
      $state.go("login");
    }

  }
]);




