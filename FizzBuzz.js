var intCounter = 1;
var words= "";
while (intCounter <= 100)
{
    if (intCounter % 15 == 0)
    {
        words= "FizzBuzz";
        console.log (words);
    } 
    if (intCounter % 3 == 0)
    {
        words= "Fizz";
        console.log (words);
    }
    if (intCounter % 5 == 0)
    {
        words= "Buzz";
        console.log (words);
    }
    intCounter ++;
}
//Ryan Frankowski, Ethan Knapp, Paige Hyne