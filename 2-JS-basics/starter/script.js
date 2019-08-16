/*var avgScoreJohn = (150+120+103)/3;
var avgScoreMark = (116+94+123)/3;
var avgScoreMary = (97+134+105)/3;

console.log(avgScoreJohn, avgScoreMark, avgScoreMary);

if (avgScoreJohn > avgScoreMark && avgScoreJohn > avgScoreMary) 
    {
    console.log('John wins.');     
    }
else if (avgScoreMark > avgScoreJohn && avgScoreMark > avgScoreMary)
    {
    console.log('Mark wins.');    
    }
else if (avgScoreMary > avgScoreJohn && avgScoreMary > avgScoreMark) {
    console.log('Mary wins.');
}
    else
    console.log('Draw');

*/

var bills = [124,48,268];


var tip = function(bill) {
    switch(true) {
        case bill < 50:
            return bill * 0.2;
        case bill >= 50 && bill < 200:
            return bill * 0.15;
        case bill >= 200:
            return bill * 0.1;
        default:
            return 0;
    }
}
        
var tips = [tip(bills[0]),tip(bills[1]),tip(bills[2])];
var totals = [(bills[0]+tips[0]),(bills[1]+tips[1]),(bills[2]+tips[2])]

console.log(bills);
console.log(tips);
console.log(totals);
