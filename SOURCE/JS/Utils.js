//@author = Taeke van der Veen

"use strict";

// Een pseudo namespace
var jpesNS = jpesNS || {};

// Koppelt alle code en variabelen aan een pseudo namespace.
//
// @param (context) de pseudo namespace.
(function(context) {

    var problems = [{title:"Multiples of 3 and 5",               solver:context.solve1},
                    {title:"Even Fibonacci numbers",             solver:context.solve2},
                    {title:"Largest prime factor",               solver:context.solve3},
                    {title:"Largest palindrome product",         solver:context.solve4},
                    {title:"Smallest multiple",                  solver:context.solve5},
                    {title:"Sum square difference",              solver:context.solve6},
                    {title:"10001st prime",                      solver:context.solve7},
                    {title:"Largest product in a series",        solver:context.solve8},
                    {title:"Special Pythagorean triplet",        solver:context.solve9},
                    {title:"Summation of primes",                solver:context.solve10},
                    {title:"Largest product in a grid",          solver:context.solve11},
                    {title:"Highly divisible triangular number", solver:context.solve12},
                    {title:"Large sum",                          solver:context.solve13},
                    {title:"Longest Collatz sequence",           solver:context.solve14},
                    {title:"Lattice paths",                      solver:context.solve15},
                    {title:"Power digit sum",                    solver:context.solve16},
                    {title:"Number letter counts",               solver:context.solve17},
                    {title:"Maximum path sum I",                 solver:context.solve18},
                    {title:"Counting Sundays",                   solver:context.solve19},
                    {title:"Factorial digit sum",                solver:context.solve20}];

    // Creeert rijen in een html Table met het id Grid en creeert daarin de kolommen:
    // - het nummer van het probleem;
    // - de titel van het probleem in een link naar de beschrijving;
    // - een html button met een onclick gekoppeld aan de functie die het antwoord berekend;
    // - een placeholder voor het antwoord.
    context.loadTable = function() {
        var i = 1;
        while (i <= problems.length) {
            var grid = document.getElementById("grid");
            if (grid) {
                var row = grid.insertRow(i);
                var cell1 = row.insertCell(0);
                cell1.innerHTML = "<div class=\"idColumn\">" + i + "<\div>";
                var cell2 = row.insertCell(1);
                cell2.innerHTML = "<a class=\"problemLink\" href=\"http://projecteuler.net/problem=" + i + "\" target=\"_blank\">" + problems[i - 1].title + "</a>";
                var cell3=row.insertCell(2);
                cell3.innerHTML = "<div class=\"button\"><button onclick=\"jpesNS.callSolver(" + (i - 1) + ")\">Solve</button></div>";
                var cell4 = row.insertCell(3);
                cell4.id = "Answer" + i;
                var cell5 = row.insertCell(4);
                cell5.innerHTML = "<button onclick=\"jpesNS.toggleOverlay(" + (i - 1) + ")\">Source</button>";
            }
            i++;
        }
    }

    // Roept de functie die het antwoord berekend aan.
    // @param (i) het nummer van het probleem. Als de functie nog niet gedefineerd is wordt een popup
    // getoond met "No answer yet".
    context.callSolver = function(i) {
        if (problems[i].solver == null) {
            alert("No answer yet.");
        }
        else {       
            problems[i].solver.call();
        }
    }
    
    // Maakt een overlay zichtbaar en een extra div die over de pagina ligt en die de source code van de oplossing toont.
    // @param (i) het nummer van het probleem.
    context.toggleOverlay = function (i){
        var overlay = document.getElementById('overlay');
        var source = document.getElementById('source');
        if (overlay && source)
        {
            overlay.style.opacity = .6;
            if(overlay.style.visibility == "visible"){
                overlay.style.visibility = "hidden";
                source.style.visibility = "hidden";
            } else {
                overlay.style.visibility = "visible";
                source.style.visibility = "visible";
                jpesNS.showSource(i);
            }
        }
    }
    
    // Rendert de source van de oplossing in de daarvoor beschikbare div.
    // @param (i) het nummer van het probleem. Als de functie nog niet is gedefinieerd wordt de text "No source available yet." getoond.
    context.showSource = function (i){
        var sourceViewer = document.getElementById('sourceViewer');
        if (sourceViewer)
        {
            if (problems[i].solver == null) {
                sourceViewer.innerHTML = "No source available yet.";
            }
            else {       
                sourceViewer.innerHTML = "<pre>" + problems[i].solver.toString().replace("<", "&lt;") + "</pre>";
            }
        }
    }
    
})(jpesNS);     
