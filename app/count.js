if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {

      console.log(start);
      var intervalID = function() {
        setInterval ( increment, 100 );
      };

      intervalID();

      function increment() {
        if ( start <= end ) {
          start++;
          console.log(start);
        } else {
          clearInterval(intervalID);
        }
      }

      return { 
        cancel: function() {
          clearInterval(intervalID);
        }
      };

    }
  };
});