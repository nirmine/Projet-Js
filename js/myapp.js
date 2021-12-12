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
