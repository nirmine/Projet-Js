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

myApp.controller('friendController', function($scope, backService,storageService,$http,$state) {
    $scope.infos= [];
    console.log(storageService.get('userFirstName') +" fc"+storageService.get('userLastName'))
    delete $http.defaults.headers.common['Content-Type, x-requested-with'];
    $http({
        method: 'GET',
        url: 'http://localhost:3000/getInfoUser/'+storageService.get('userFirstName')+'/'+storageService.get('userLastName'),
       // params: 'limit=10, sort_by=created:desc',
        headers: {'Authorization': 'Token token=xxxxYYYYZzzz'},
    
     }).success(function(data){
       // return data;
       console.log(data)//la valeur dans le body du json
       $scope.infos=data
       // alert('success');
    }).error(function(){
        alert("error");
    });


  


});


