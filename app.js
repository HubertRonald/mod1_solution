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
    if ($scope.names == null) {$scope.names = "";}
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

// Verion: JavaScript Minifier/Compressor
// !function(){"use strict";function e(e){e.names="",e.msg="",e.customStyle={},e.turnGreen=function(){e.customStyle.style={color:"green",border:"1px solid green"}},e.turnRed=function(){e.customStyle.style={color:"red",border:"1px solid red"}},e.myLunchChecker=function(){if(null==e.names&&(e.names=""),""==e.names)e.msg=" Please enter data first ",e.turnRed();else{var n=e.names,r=0;for(var o in n)o.replace(/\s/g,"").length&&r++;r>0&&r<=3?e.msg=" Enjoy! ":r>3&&(e.msg=" Too much! "),e.turnGreen()}}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
