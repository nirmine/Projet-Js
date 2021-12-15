myApp.service('SignupService', function($http) {
    delete $http.defaults.headers.common['Content-Type, x-requested-with'];
    this.sendData = function(callbackFunc,$info) {
        $http({
            method: 'POST',
            url: 'http://localhost:3000/signUp',
           // params: 'limit=10, sort_by=created:desc',
            headers: {'Authorization': 'Token token=xxxxYYYYZzzz'},
            data:$info
         }).success(function(data){
           // return data;
           //console.log(data)//la valeur dans le body du json
            alert('success');
        }).error(function(){
            alert("error");
        });
     }
    });

myApp.controller('SignupController', ["$scope", "$state", "sampleFactory","$http",

    function ($scope, $state, sampleFactory,$http) {
       
        var formData = {
            firstName: "default",
            address: "default",
            lastName: "default",
            password: "default",
            email:"default@gmail.com",
            phone:"222222"
        };

        console.log('this is the Signupcontroller, hi!');

        sampleFactory.sampleFunction();

        $scope.gotohome = function () {
            $state.go("home");
        }
        
        $scope.gotologin = function () {
            $state.go("login");
        }
        $scope.submitForm= function()
        {
            formData = $scope.form;
            // console.log(formData);
             /*SignupService.sendData(function(dataResponse) {
                $scope.data = dataResponse;
                console.log(dataResponse)
            });*/

            

            delete $http.defaults.headers.common['Content-Type, x-requested-with'];
            //this.sendData = function(callbackFunc,$info) {
                $http({
                    method: 'POST',
                    url: 'http://localhost:3000/signUp',
                   // params: 'limit=10, sort_by=created:desc',
                    headers: {'Authorization': 'Token token=xxxxYYYYZzzz'},
                    data:formData
                 }).success(function(data){
                   // $state.go("home");
                   // return data;
                   //console.log(data)//la valeur dans le body du json
                   // alert('success signup');
                }).error(function(){
                    alert("error");
                });
             //}






        }
    }
]);
