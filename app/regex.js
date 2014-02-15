if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var regex = /\d/g;
        if (str.match(regex)) {
            return true;
        } else {
            return false;
        }
    },

    containsRepeatingLetter : function(str) {
        var regex = /([a-z])\1/gi;
        if (str.match(regex)) {
            return true;
        } else {
            return false;
        }
    },

    endsWithVowel : function(str) {
        var regex = /[aeiou]\b/gi;
        if (str.match(regex)) {
            return true;
        } else {
            return false;
        }
    },

    captureThreeNumbers : function(str) {
        var regex = /(\d{3})/g;
        var result = str.match(regex);
        if (result === null) {
            return false;
        }
        result = result.join("");
        if ( result.length > 3 ) {
            result = result.substr(0, 3);
        }
        return result;
    },

    matchesPattern : function(str) {
        var regex = /^(\d{3})-(\d{3})-(\d{4})$/;
        if (str.match(regex)) { 
            return true;
        } else {
            return false;
        }
    },
    isUSD : function(str) {
        // This one was my own that leaves some exceptions
        var regex = /^\$(\d{1,3}\,)?(\d{3}\,)*(\d{0,3})?(\.\d{2})?$/;
        // This one I found in RegExLib
        var regex = /^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/;
        if (str.match(regex)) {
            return true;
        } else {
            return false;
        }
    }
  };
});
