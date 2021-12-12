myApp.controller('FriendsController', ["$scope", "$state",

    function ($scope, $state) {

        $scope.gotohome = function () {
            $state.go("home");
        }

        $scope.gotologin = function () {
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


