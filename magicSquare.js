angular.module("magicSquareApp", [])
  .controller("magicCtrl", ['$scope', function ($scope) {
    $scope.magicSquare = function (one, two, three, four, five, six, seven, eight, nine) {
      Array.prototype.forEach.call(arguments, function(el,id,myArr){
        if (typeof el === 'string') {
          myArr[id] = Number(el);
          console.log("myArr", myArr)
        }
      });
      var result = one + two + three;
      console.log(result);
      if ((one + four + seven !== result) || (two + five + eight !== result) || (three + six + nine !== result) || (four + five + six !== result) || (four + five + six !== result) || (seven + eight + nine !== result) || (one + five + nine !== result) || (three + five + seven !== result)) {
        var msg = "This is not a magic square";
        $scope.msg = msg;
        return false;
      } else {
        var msg = "Congratulations, you got a magic square!!!";
        $scope.msg = msg;
        return true;
      }
    }
  }])