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


    .state('confirmation', {
          url: '/confirmation',
          templateUrl: 'confirmation/confirmation.html'
     })

    .state('programs', {
         url: '/programs',
         templateUrl: 'programs/programs.html'
      });


    $urlRouterProvider.otherwise('home');

});
/*myApp.service('dataService', function($http) {
   delete $http.defaults.headers.common['X-Requested-With'];
   this.getData = function(callbackFunc) {
       $http({
           method: 'GET',
           url: 'https://opendata.paris.fr/api/records/1.0/search/?dataset=restaurants-casvp&q=&facet=code&facet=nom_restaurant&facet=type',
          // params: 'limit=10, sort_by=created:desc',
           headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
        }).success(function(data){
           console.log(data);
           alert('success');
       }).error(function(){
           alert("error");
       });
    }
   });*/
myApp.service('nodeService', function($http) {
      delete $http.defaults.headers.common['Content-Type, x-requested-with'];
      this.getData = function(callbackFunc) {
          $http({
              method: 'GET',
              url: 'http://localhost:3000/hello',
             // params: 'limit=10, sort_by=created:desc',
              headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
           }).success(function(data){
             // return data;
             console.log(data)
              alert('success');
          }).error(function(){
              alert("error");
          });
       }
      });

  myApp.controller('AngularJSCtrl', function($scope, dataService) {
      $scope.data = null;
      /*dataService.getData(function(dataResponse) {
          $scope.data = dataResponse;
      });*/
     /*$scope.hello=function()
      {*/
        // alert("hi");
      //}
     
  });