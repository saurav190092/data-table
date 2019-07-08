var module = angular.module('app', ['ui.bootstrap']);

module.controller('MyController', function($scope, $http) {
  $scope.data=[];    //Data which will show in table decalaration 
  $scope.jData=[];  //json data object declaration 
  

  $scope.currentPage = 1;
  $scope.numPerPage = 10;
  $scope.maxSize = 3;     //Intial maximum page shown in the pagination 
  
  $scope.query = {}    //Query object 
  $scope.queryBy = '$' 
  
  $scope.sortType     = 'name'; //set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
 

  

    //Grab data from Json file 
    $http.get('data.json').success(function(data) {
        $scope.jData=data;
        //For the intial value
        $scope.data = $scope.jData.slice(0, 10);
        
     });

    //Added $watch to listend scope changes
    $scope.$watch('currentPage + numPerPage', function() {
      //calculate slice size 
      var begin = (($scope.currentPage - 1) * $scope.numPerPage);
      var end = begin + $scope.numPerPage;
      
      $scope.data = $scope.jData.slice(begin, end);
    });
    
    $scope.orderProp="name"; 
});