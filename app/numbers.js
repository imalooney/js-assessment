if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {    
        num = num.toString(2).split("").reverse();
        return parseInt(num[bit-1]);
    },

    base10: function(str) {
        str = str.split("").reverse();
        var total = 0;
        var exp = 0;
        for ( var i=0; i<str.length; i++ ) {
            var asInt = parseInt(str[i]);
            var subtotal = asInt*( Math.pow(2, exp ));
            total = total + subtotal;
            exp = exp + 1;
        }
        return total;
    },

    convertToBinary: function(num) {
        var binary_str = [];
        do {
            var newNum = Math.floor(num / 2);
            var bit = num % 2;
            binary_str.push(bit);
            num = newNum;
            if ( newNum === 1 ) {
                binary_str.push(1);
            }
        } while ( newNum > 1 );
        if ( binary_str.length < 8 ) {
            for ( var i=0; i<8; i++ ) {
                if ( binary_str[i] === undefined ) {
                    binary_str[i] = 0;
                }
            }
        }
        binary_str = binary_str.reverse();
        return binary_str.join("");
    },

    multiply: function(a, b) {
        return ( 1000*a*b ) * ( 1/1000 );
    }
  };
});

