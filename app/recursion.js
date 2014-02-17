if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      // var files = [];
     
    },

    permute: function(arr) {

      // This was a formala I looked up for getting permutations...didn't work though

      var permArr = [], usedChars = [];
      function permute(arr) {
        var i, ch;
        for (i = 0; i < arr.length; i++) {
          ch = arr.splice(i, 1);
          usedChars.push(ch);
          if (arr.length == 0) permArr[permArr.length] = usedChars.join("");
          permute(arr.join(""));
          arr.splice(i, 0, ch);
          usedChars.pop();
        }
      }(arr);

      return permArr;

    }
  };
});
