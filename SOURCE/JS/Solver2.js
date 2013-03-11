// @author = Taeke van der Veen

"use strict";

// Een pseudo namespace
var jpesNS = jpesNS || {};

// Koppelt alle code en variabelen aan een pseudo namespace.
//
// @param de (context) de pseudo namespace.
(function(context) {

    // Berekend het antwoord voor http://projecteuler.net/problem=2
    context.solve2 = function() {
        var totaal = 0;
        var fibonaccis = [1, 2];
        var max = 4000000;
        while (fibonaccis[0]<max && fibonaccis[1]<max) {
            for (var i = 0; i < fibonaccis.length; i++) {
                if ((fibonaccis[i] < max) && (fibonaccis[i] % 2 == 0)) {
                    totaal = totaal + fibonaccis[i];
                }
            }
            fibonaccis[0] = fibonaccis[0] + fibonaccis[1];
            fibonaccis[1] = fibonaccis[1] + fibonaccis[0];
        }
        var answerCell=document.getElementById("Answer2");
        if (answerCell) {
            answerCell.innerHTML="<div class=\"answerColumn\">" + totaal + "<\div>";
        }
    }
})(jpesNS); 