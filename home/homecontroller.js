myApp.controller('HomeController', ["$scope", "$state",

  function($scope, $state) {

    console.log('this is the homecontroller, hi!');


    $scope.gotologin = function() {
      $state.go("login");
    }
  /* $scope.data = null;
      dataService.getData(function(dataResponse) {
          $scope.data = dataResponse;
      });*/

    $scope.gotofriends = function () {
      $state.go("friends");
    }

    $scope.gotoprograms = function () {
      $state.go("programs");
    }

 
  }
]);




