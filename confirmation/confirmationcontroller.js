myApp.controller('ConfirmationController', ["$scope", "$state","storageService","$http",

  function($scope, $state,storageService,$http) {

    //console.log('this is the homecontroller, hi!');
   
    //console.log(storageService.get('key'))
    
    $scope.restaus=[];
    $codePostale=storageService.get('codeP')
  
      $scope.data = null;
      
      delete $http.defaults.headers.common['X-Requested-With'];
      if($codePostale != "undefined")
      {
      $http({
        method: 'GET',
        url: 'https://opendata.paris.fr/api/records/1.0/search/?dataset=restaurants-casvp&q=&facet=code&facet=nom_restaurant&facet=type&refine.code='+$codePostale,
      
        headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
     }).success(function(data){
       //console.log(data.records)
        $scope.restaus=data.records;
       // alert('success api');
    }).error(function(){
        alert("error api");
    });
        }
        else 
        {
            $http({
                method: 'GET',
                url: 'https://opendata.paris.fr/api/records/1.0/search/?dataset=restaurants-casvp&q=&facet=code&facet=nom_restaurant&facet=type',
              
                headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
             }).success(function(data){
                 
               //console.log(data.records)
                $scope.restaus=data.records;
               // alert('success api');
            }).error(function(){
                alert("error api");
            });
        }
        $scope.submitForm= function()
        {
           
            formData = $scope.form;
            
        
           formData.restauName=storageService.get('res')
           formData.restauAddress=storageService.get('address')
           formData.owner=storageService.get('userFirstName') +" "+storageService.get('userLastName')
          
           console.log(formData)
          //requete http
           delete $http.defaults.headers.common['Content-Type, x-requested-with'];
          
               $http({
                   method: 'POST',
                   url: 'http://localhost:3000/addProgram',
                  // params: 'limit=10, sort_by=created:desc',
                   headers: {'Authorization': 'Token token=xxxxYYYYZzzz'},
                   data:formData
                }).success(function(data){
                  $state.go("programs");
               }).error(function(){
                   alert("error");
               });



        }


        $scope.hi=function($r,$ad,$co)
        {

            storageService.save('res', $r);
            storageService.save('address', $ad+$co);
          //  storageService.save('res', $r);
            //console.log($r)
        }
 /*$scope.chooseRestau=function($restauName,$RestauPlace)
 {

 }*/



  }
]);
/*myApp.service('apiService', function($http) {
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
   
       
      
          $scope.restaus=[];
          $codePostale="gfgf"//storageService.get('codeP')
        
            $scope.data = null;
            console.log($codePostale)
            delete $http.defaults.headers.common['X-Requested-With'];
            $http({
              method: 'GET',
              url: 'https://opendata.paris.fr/api/records/1.0/search/?dataset=restaurants-casvp&q=&facet=code&facet=nom_restaurant&facet=type&refine.code='+$codePostale,
            
              headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
           }).success(function(data){
             
              $scope.restaus=data.records;
             // alert('success api');
          }).error(function(){
              alert("error api");
          });
          
        
       
      });*/