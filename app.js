(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  // Some variables defined
  $scope.names = "";
  $scope.msg = "";

  // Colors Style Defined
  $scope.customStyle = {};
  
  $scope.turnGreen = function () {
    $scope.customStyle.style = {
      "color": "green",
      "border":"1px solid green"
    };
  }

  $scope.turnRed = function() {
    $scope.customStyle.style = {
      "color": "red",
      "border":"1px solid red"
    };
  }

  
  $scope.myLunchChecker = function () {
    if ($scope.names == "") {
      $scope.msg = " Please enter data first ";
      $scope.turnRed();

    } else { 

      var content = $scope.names;
      var numberOfElements = 0;

      /*
      check if there are empty items
      for more information please check this link
      https://stackoverflow.com/questions/10261986/detect-string-which-contain-only-spaces
      */
      for (var str in content) {
        if (str.replace(/\s/g, '').length) {
          //alert(content[str]);
          numberOfElements++;
        }
      } //end for
      
      if (numberOfElements > 0 && numberOfElements <= 3) {
        $scope.msg = " Enjoy! ";
        
        } else if (numberOfElements > 3) { 
        $scope.msg = " Too much! ";
        
      } // end else if

      $scope.turnGreen();;
      
    } // end else
    
  };

}

})();
