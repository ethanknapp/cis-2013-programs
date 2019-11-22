// start the program
 var $ = function (id) 
{
    return document.getElementById(id);
};

var generate = function () 
{
    var intCount, i, j, k, stringOutput;
    
    i=0;
    j = 1;
    stringOutput = i + " " + j; //initialize the Fiobacci series output to include the first two numbers 

	intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	
    if (isNaN(intCount)||intCOunt<1||intCOunt>100)
    {
       $("total_fib").value = "";
       $("output").value = "please enter a valid number";
       alert ("You must enter a number between 1 and 100");
    }
    else
    {
        while (intCount>2)
        {
            k=i+j;
            i=j;
            j=k;
            iuntCount--;
            stringOutput = stringOutput + " " + k;
        }
        $("output").value = stringOutput;
    }
  
	// write whatever kind of loop you want, given the above info, to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM
    intCount = parseInt(alert("Please enter the amount of Fiobacci Numbers you would like"));
    if(intCount <= 0 || intCount >= 100 || isNaN(intCount))
    {
        intCount = parseInt(alert("Please enter another amount of numbers between 0 and 100"));
    }
} ;

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
} ;