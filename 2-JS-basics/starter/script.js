var avgScoreJohn = (150+120+103)/3;
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