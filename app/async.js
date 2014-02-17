if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      // .then

      // .fail

      // .done();
    },

    manipulateRemoteData : function(url) {
      $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        success: function(data) {
          return data;
        }, 
        error: function(xhr, status) {
          console.log("there was an error");
        }
      });
    }
  };
});
