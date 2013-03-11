//@author = Taeke van der Veen

"use strict";

// Een pseudo namespace
var jpesNS = jpesNS || {};

// Koppelt alle code en variabelen aan een pseudo namespace.
//
// @param de (context) de pseudo namespace.
(function(context) {

    // Berekend het antwoord voor http://projecteuler.net/problem=1
    context.solve1 = function() {
        var totaal = 0;
        var vijf = 5;
        var drie = 3;
        while (drie<1000) {
            if (vijf<1000) {
                totaal = totaal + vijf;
            }
            if (drie%5!=0) {
                totaal = totaal + drie;
            }
            vijf = vijf + 5;
            drie = drie + 3;
        }
        var answerCell=document.getElementById("Answer1");
        if (answerCell) {
            answerCell.innerHTML="<div class=\"answerColumn\">" + totaal + "<\div>";
        }
    }
})(jpesNS); 