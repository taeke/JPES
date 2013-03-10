var jpesNS = jpesNS || {};

(function(context) {
	var problems = [{title:"Multiples of 3 and 5",               solver:context.solve1},
                    {title:"Even Fibonacci numbers",             solver:null},
                    {title:"Largest prime factor",               solver:null},
                    {title:"Largest palindrome product",         solver:null},
                    {title:"Smallest multiple",                  solver:null},
                    {title:"Sum square difference",              solver:null},
                    {title:"10001st prime",                      solver:null},
                    {title:"Largest product in a series",        solver:null},
                    {title:"Special Pythagorean triplet",        solver:null},
                    {title:"Summation of primes",                solver:null},
                    {title:"Largest product in a grid",          solver:null},
                    {title:"Highly divisible triangular number", solver:null},
                    {title:"Large sum",                          solver:null},
                    {title:"Longest Collatz sequence",           solver:null},
                    {title:"Lattice paths",                      solver:null},
                    {title:"Power digit sum",                    solver:null},
                    {title:"Number letter counts",               solver:null},
                    {title:"Maximum path sum I",                 solver:null},
                    {title:"Counting Sundays",                   solver:null},
                    {title:"Factorial digit sum",                solver:null}];

    context.loadTable = function() { 	
		i=1;
		while (i<=problems.length)
		{
			var table=document.getElementById("grid");
			var row=table.insertRow(i);
			var cell1=row.insertCell(0);
			cell1.innerHTML="<div class=\"idColumn\">" + i + "<\div>";
			var cell2=row.insertCell(1);
			cell2.innerHTML="<a class=\"problemLink\" href=\"http://projecteuler.net/problem=" + i + "\" target=\"_blank\">" + problems[i-1].title + "</a>";
			var cell3=row.insertCell(2);
			cell3.innerHTML="<div class=\"button\"><button onclick=\"jpesNS.callSolver(" + (i - 1) + ")\">Solve</button></div>";
			var cell4=row.insertCell(3);
			cell4.id="Answer"+i;
			i++;
		}
	}
	
	context.callSolver = function(i) {
	    if (problems[i].solver==null)
        {
	        alert("No answer yet.");
        }
        else
        {		
		    problems[i].solver.call();
		}
	}
})(jpesNS);   	
