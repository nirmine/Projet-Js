myApp.controller('SignupController', ["$scope", "$state", "sampleFactory",

    function ($scope, $state, sampleFactory) {

        console.log('this is the Signupcontroller, hi!');

        sampleFactory.sampleFunction();

        $scope.gotohome = function () {
            $state.go("home");
        }
        
        $scope.gotologin = function () {
            $state.go("login");
        }
    }
]);