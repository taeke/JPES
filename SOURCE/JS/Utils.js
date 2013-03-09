var jpesNS = jpesNS || {};

(function(context) {
	var titles = ["Multiples of 3 and 5",
				  "Even Fibonacci numbers",
				  "Largest prime factor",
				  "Largest palindrome product",
				  "Smallest multiple",
				  "Sum square difference",
				  "10001st prime",
				  "Largest product in a series",
				  "Special Pythagorean triplet",
				  "Summation of primes",
				  "Largest product in a grid",
				  "Highly divisible triangular number",
				  "Large sum",
				  "Longest Collatz sequence",
				  "Lattice paths",
				  "Power digit sum",
				  "Number letter counts",
				  "Maximum path sum I",
				  "Counting Sundays",
				  "Factorial digit sum"];

    var solvers = new Array();
    solvers[0] = context.solve1;

    context.loadTable = function() { 	
		i=1;
		while (i<=titles.length)
		{
			var table=document.getElementById("grid");
			var row=table.insertRow(i);
			var cell1=row.insertCell(0);
			cell1.innerHTML="<div class=\"idColumn\">" + i + "<\div>";
			var cell2=row.insertCell(1);
			cell2.innerHTML="<a class=\"problemLink\" href=\"http://projecteuler.net/problem=" + i + "\" target=\"_blank\">" + titles[i-1] + "</a>";
			var cell3=row.insertCell(2);
			cell3.innerHTML="<div class=\"button\"><button onclick=\"jpesNS.callSolver(" + (i - 1) + ")\">Solve</button></div>";
			var cell4=row.insertCell(3);
			cell4.id="Answer"+i;
			i++;
		}
	}
	
	context.callSolver = function(i) {
	    if (i < solvers.length)
        {
		    solvers[i].call();
        }
        else
        {		
	        alert("No answer yet.");
		}
	}
})(jpesNS);   	
