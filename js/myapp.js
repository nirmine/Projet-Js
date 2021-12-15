var myApp = angular.module('myApp', ['ui.router']);


myApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('home', {
       url: '/home',
       templateUrl: 'home/home.html'
    })

    .state('login', {
       url: '/login',
       templateUrl: 'login/login.html'
    })

    .state('signup', {
       url: '/signup',
       templateUrl: 'signup/signup.html'
    })

    .state('friends', {
         url: '/friends',
         templateUrl: 'friends/friends.html'
    })

    .state('programs', {
         url: '/programs',
         templateUrl: 'programs/programs.html'
      });


    $urlRouterProvider.otherwise('home');

});

myApp.service('nodeService', function($http) {
      delete $http.defaults.headers.common['Content-Type, x-requested-with'];
      this.getData = function(callbackFunc) {
          $http({
              method: 'GET',
              url: 'http://localhost:3000/hello/10',
             // params: 'limit=10, sort_by=created:desc',
              headers: {'Authorization': 'Token token=xxxxYYYYZzzz'},
             // data:'id='+'10'
           }).success(function(data){
             // return data;
             console.log(data)//la valeur dans le body du json
              alert('success');
          }).error(function(){
              alert("error");
          });
       }
      });



  myApp.controller('AngularJSCtrl', function($scope, nodeService) {
      $scope.data = null;
      /*dataService.getData(function(dataResponse) {
          $scope.data = dataResponse;
      });*/
     /*$scope.hello=function()
      {*/
        // alert("hi");
      //}
     /* nodeService.getData(function(dataResponse) {
         $scope.data = dataResponse;
         console.log(dataResponse)
     });*/
  });

 