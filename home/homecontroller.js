myApp.controller('HomeController', ["$scope", "$state",

  function($scope, $state) {

    //console.log('this is the homecontroller, hi!');


    $scope.gotologin = function() {
      $state.go("login");
    }
  /* $scope.data = null;
      dataService.getData(function(dataResponse) {
          $scope.data = dataResponse;
      });*/

    $scope.gotofriends = function () {
      $state.go("friends");
    }

    $scope.gotoprograms = function () {
      $state.go("programs");
    }


    $scope.gotoconfirmation = function () {
      $state.go("confirmation");
    }


 
  }
]);

myApp.service('apiService', function($http) {
  delete $http.defaults.headers.common['X-Requested-With'];
  this.getData = function(callbackFunc) {
      $http({
          method: 'GET',
          url: 'https://opendata.paris.fr/api/records/1.0/search/?dataset=restaurants-casvp&q=&facet=code&facet=nom_restaurant&facet=type',
         // params: 'limit=10, sort_by=created:desc',
          headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
       }).success(function(data){
         // console.log(data);
         // alert('success api');
      }).error(function(){
          alert("error api");
      });
   }
  });


  myApp.controller('ApiController', function($scope, apiService,$http) {
   
    //$scope.change= function(){$scope.codep=$scope.postalCode}
    console.log("hgh")
      $scope.restaus=[];
      //console.log($scope.codep)
      //console.log("hi ctr api")
      /*apiService.getData(function(dataResponse) {
        console.log("hi sucess api")
          $scope.data = dataResponse;
        
        //  console.log(dataResponse)
      });*/

     /* $scope.getApiData= function()
        {*/
         
        //}
      
       /* $codePostale=$scope.postalCode
        console.log($scope.postalCode)*/
     $scope.hello=function($codePostale)
      {
        $scope.data = null;
        console.log($codePostale)
        delete $http.defaults.headers.common['X-Requested-With'];
        $http({
          method: 'GET',
          url: 'https://opendata.paris.fr/api/records/1.0/search/?dataset=restaurants-casvp&q=&facet=code&facet=nom_restaurant&facet=type&refine.code='+$codePostale,
         // params: 'limit=10, sort_by=created:desc',
          headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
       }).success(function(data){
         //console.log(data.records);
         //$scope.restaus=data.records;
         $scope.ch(data.records)
         // $scope.hello(data.records)
          //$scope.restaus=data.records;
         // alert('success api');
      }).error(function(){
          alert("error api");
      });
      }
      $scope.ch=function($ch)
      {
        $scope.restaus=$ch
      }
     console.log( $scope.restaus)
     /* apiService.getData(function(dataResponse) {
         $scope.data = dataResponse;
         console.log(dataResponse)
     });*/
  });









  