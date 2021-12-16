
myApp.controller('ProgramsController', ["$scope", "$state","storageService",

    function ($scope, $state,storageService) {

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

myApp.service('backService', function($http,storageService) {
    $owner=storageService.get('userFirstName') +" "+storageService.get('userLastName')
    delete $http.defaults.headers.common['Content-Type, x-requested-with'];
    this.getData = function(callbackFunc) {
        $http({
            method: 'GET',
            url: 'http://localhost:3000/userProgram/'+$owner,
           // params: 'limit=10, sort_by=created:desc',
            headers: {'Authorization': 'Token token=xxxxYYYYZzzz'},
        
         }).success(function(data){
           // return data;
           console.log(data)//la valeur dans le body du json
           // alert('success');
        }).error(function(){
            alert("error");
        });
     }
    });
    myApp.controller('backController', function($scope, backService,storageService,$http,$state) {
        $scope.programs= [];
        $owner=storageService.get('userFirstName') +" "+storageService.get('userLastName')
        delete $http.defaults.headers.common['Content-Type, x-requested-with'];
        $http({
            method: 'GET',
            url: 'http://localhost:3000/userProgram/'+$owner,
           
            headers: {'Authorization': 'Token token=xxxxYYYYZzzz'},
        
         }).success(function(data){
           
           console.log(data[0].programDate.split('T'))

           $scope.programs=data
           $scope.programs.date=data[0].programDate.split('T')[0]
           $scope.programs['time']=data[0].programDate.split('T')[1]
           console.log(data[0])
        }).error(function(){
            alert("error");
        });


        $scope.delete=function($date){
            $owner=storageService.get('userFirstName') +" "+storageService.get('userLastName')
            delete $http.defaults.headers.common['Content-Type, x-requested-with'];
            $http({
                method: 'DELETE',
                url: 'http://localhost:3000/delete/'+$owner+'/'+$date,
               
                headers: {'Authorization': 'Token token=xxxxYYYYZzzz'},
            
             }).success(function(data){
              
                console.log("sucess delete ")
                $state.go("programs");
            }).error(function(){
                alert("error");
            });
        }


    });


    myApp.controller('hideController', function($scope) {
        $scope.friends="hh";
        $scope.des="";
     $scope.change=function($scope,$f,$d)
     {
        $scope.friends=$f
        $scope.des=$d
        console.log( $scope.friends)
     }
    });
    myApp.controller('deleteController', function($scope) {
        $scope.delete=function($date){
            $owner=storageService.get('userFirstName') +" "+storageService.get('userLastName')
            delete $http.defaults.headers.common['Content-Type, x-requested-with'];
            $http({
                method: 'DELETE',
                url: 'http://localhost:3000/delete/'+$owner+'/'+$date,
               // params: 'limit=10, sort_by=created:desc',
                headers: {'Authorization': 'Token token=xxxxYYYYZzzz'},
            
             }).success(function(data){
               // return data;
               console.log(data)//la valeur dans le body du json
               $scope.programs=data
               // alert('success');
            }).error(function(){
                alert("error");
            });
        }
    
    });


    myApp.controller('notifController', function($scope,storageService,$http) {
        $scope.programs= [];
        $owner=storageService.get('userFirstName') +" "+storageService.get('userLastName')
        delete $http.defaults.headers.common['Content-Type, x-requested-with'];
        $http({
            method: 'GET',
            url: 'http://localhost:3000/userInvitations/'+$owner,
           
            headers: {'Authorization': 'Token token=xxxxYYYYZzzz'},
        
         }).success(function(data){
           
           $scope.programs=data
       
           console.log(data)
        }).error(function(){
            alert("error");
        });



    });