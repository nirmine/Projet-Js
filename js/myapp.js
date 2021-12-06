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
    });

    $urlRouterProvider.otherwise('home');

});
myApp.service('dataService', function($http) {
   delete $http.defaults.headers.common['X-Requested-With'];
   this.getData = function(callbackFunc) {
       $http({
           method: 'GET',
           url: 'https://opendata.paris.fr/explore/dataset/restaurants-casvp/api/?disjunctive.code&disjunctive.nom_restaurant&disjunctive.type',
          // params: 'limit=10, sort_by=created:desc',
           headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
        }).success(function(data){
           console.log(data);
          // alert('success');
       }).error(function(){
           alert("error");
       });
    }
   });
   myApp.controller('AngularJSCtrl', function($scope, dataService) {
      $scope.data = null;
      dataService.getData(function(dataResponse) {
          $scope.data = dataResponse;
      });
     /* $scope.hello=function()
      {
         alert("hi");
      }*/
  });