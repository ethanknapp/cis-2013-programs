//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));

floatMidPts = parseFloat(prompt("Please enter Midterm points (0-35)"));

floatFinPts =parseFloat(prompt("Please enter Final points (0-35)"));

floatTotalPts = floatHwPts + floatMidPts + floatFinPts;

intGradeOption = parseInt(prompt("audit pass/fail (1) or letter grade (2)"));

if (intGradeOption===1)
{
    if(floatTotalPts>=80)
    {
        stringFinalGrade="pass";
    }
    if(floatTotalPts<=79.99)
    {
        stringFinalGrade="fail";
    }
}
if(intGradeOption===2)
{
    if(floatTotalPts>=90)
    {
     stringFinalGrade="A";
    }
    if(floatTotalPts>=80 && floatTotalPts<=89.99)
    {
        stringFinalGrade="B";
    }
    if(floatTotalPts<=79.99 && floatTotalPts>=70)
    {
        stringFinalGrade="C";
    }
    if(floatTotalPts>=60 && floatTotalPts<=69.99)
    {
        stringFinalGrade="D";
    }
    if(floatTotalPts<=59.99)
    {
        stringFinalGrade="F";
    }
}
alert("Your final grade is: " +stringFinalGrade);
