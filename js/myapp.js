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
