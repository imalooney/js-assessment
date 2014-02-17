if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(str2) {
            return str + ', ' + str2;
        } 
    },

    makeClosures : function(arr, fn) {
        var closured = [];
        var makeFunc = function(val) {
            return function() { return fn(val); };
        };
        for (var i=0; i<arr.length; i++) {
            closured.push(makeFunc(arr[i]));
        }
        return closured;
    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {

    },

    callIt : function(fn) {
        // for (var i=0; i<arguments.length; i++) {
        //     return fn(arguments[i]);
        // }
    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {
        // if (arguments.length < 1) {
        //     return fn;
        // } else if (arguments.length < 2) {
        //     return fn arguments[0] / arguments[1];
        // }

    }
  };
});
