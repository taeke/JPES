//@author = Taeke van der Veen

"use strict";

// Een pseudo namespace
var jpesNS = jpesNS || {};

// Koppelt alle code en variabelen aan een pseudo namespace.
//
// @param (context) de pseudo namespace.
(function(context) {

    // Onderzoekt of de parameter een priemgetal is.
    //
    // @param (prime) het potentiele priem getal.
    // return een boolean true als prime een priemgetal is.
    context.isAPrime = function(prime) {
        var divider = 2;
        while (prime % divider != 0 && prime > divider)
            divider++;
        return prime == divider;
    }

    // Berekend het antwoord voor http://projecteuler.net/problem=1
    context.solve3 = function() {
        var max = 600851475143;
        var count = 1;
        var found = false;
        while (!found)
        {
            count++;
            if (max % count == 0)
            {
                var divider = max / count;
                if (max % divider == 0)
                {
                    found = context.isAPrime(divider);
                }
            }
        }
        var answerCell=document.getElementById("Answer3");
        if (answerCell) {
            answerCell.innerHTML="<div class=\"answerColumn\">" + (max / count) + "<\div>";
        }
    }
})(jpesNS); 