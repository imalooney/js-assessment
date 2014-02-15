if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                return i;
            }
        }
        return -1;
    },

    sum : function(arr) {
        var sum = 0;
        for (var i=0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
        var newAry = [];
        for (var i=0; i < arr.length; i++) {
            if (arr[i] !== item) {
                newAry.push(arr[i]);
            }
        }
        return newAry;
    },

    removeWithoutCopy : function(arr, item) {
        var length = arr.length;
        for (var i=0; i < length; i++) {
            if ( arr[i] === item ) {
                arr.splice(i, 1);
                i = i-2;
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.splice(0, 0, item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift(0);
        return arr;
    },

    concat : function(arr1, arr2) {
        var arr = arr1.concat(arr2);
        return arr;
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        for (var i=0; i<arr.length; i++) {
            if (arr[i] === item) {
                count = count + 1;
            }
        }
        return count;
    },

    duplicates : function(arr) {
        arr = arr.sort();
        var duplicates = [];
        for (var i=0; i<arr.length; i++) {
            if (arr[i] === arr[i-1]) {
                if (duplicates.indexOf(arr[i]) === -1) {
                    duplicates.push(arr[i]);
                }
            }
        }
        return duplicates;
    },

    square : function(arr) {
        for (var i=0; i<arr.length; i++) {
            arr[i] = Math.pow(arr[i], 2);
        }
        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var occurrences = [];
        for (var i=0; i<arr.length; i++) {
            if (arr[i] === target) {
                occurrences.push(i);
            }
        }
        return occurrences;
    }
  };
});
