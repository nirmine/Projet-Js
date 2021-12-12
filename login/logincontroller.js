myApp.controller('LoginController', ["$scope", "$state","sampleFactory",

  function($scope, $state, sampleFactory) {

    console.log('this is the logincontroller, hi!');

    sampleFactory.sampleFunction();

    $scope.gotosignup = function() {
      
      $state.go("signup");
    }
    $scope.login=function()
    {
      
    }


  }
]);
