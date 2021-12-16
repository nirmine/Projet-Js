myApp.controller('LoginController', ["$scope", "$state","sampleFactory","storageService","$http",

  function($scope, $state, sampleFactory,storageService,$http) {

    console.log('this is the logincontroller, hi!');

    sampleFactory.sampleFunction();

    $scope.gotosignup = function() {
      
      $state.go("signup");
    }
    $scope.login=function()
    {
      $user=$scope.form
      //$state.go("home");
     delete $http.defaults.headers.common['Content-Type, x-requested-with'];
      $http({
          method: 'GET',
          url: 'http://localhost:3000/getInfoUserByMail/'+$user.email+'/'+$user.pwd,
         // params: 'limit=10, sort_by=created:desc',
          headers: {'Authorization': 'Token token=xxxxYYYYZzzz'},
      
       }).success(function(data){
         // return data;
         if(data.length==0)
         alert("wrong password or email! ")
         else 

        {
          console.log(data[0].firstName)
          storageService.save('userFirstName',data[0].firstName);
            storageService.save('userLastName', data[0].lastName);
            $state.go("programs");
        }
      }).error(function(){
          alert("error");
      });

    }


  }
]);

myApp.controller('checkController', function($scope, backService,storageService,$http,$state) {
  $scope.user=null;
  //$owner=storageService.get('userFirstName') +" "+storageService.get('userLastName')
  delete $http.defaults.headers.common['Content-Type, x-requested-with'];
  $http({
      method: 'GET',
      url: 'http://localhost:3000/getInfoUserByMail/'+$owner,
     // params: 'limit=10, sort_by=created:desc',
      headers: {'Authorization': 'Token token=xxxxYYYYZzzz'},
  
   }).success(function(data){
     // return data;
     console.log(data)//la valeur dans le body du json
     //$scope.programs=data
     // alert('success');
  }).error(function(){
      alert("error");
  });



});