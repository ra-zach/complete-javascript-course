///*var avgScoreJohn = (150+120+103)/3;
//var avgScoreMark = (116+94+123)/3;
//var avgScoreMary = (97+134+105)/3;
//
//console.log(avgScoreJohn, avgScoreMark, avgScoreMary);
//
//if (avgScoreJohn > avgScoreMark && avgScoreJohn > avgScoreMary) 
//    {
//    console.log('John wins.');     
//    }
//else if (avgScoreMark > avgScoreJohn && avgScoreMark > avgScoreMary)
//    {
//    console.log('Mark wins.');    
//    }
//else if (avgScoreMary > avgScoreJohn && avgScoreMary > avgScoreMark) {
//    console.log('Mary wins.');
//}
//    else
//    console.log('Draw');
//
//*/
//
//var bills = [124,48,268];
//
//
//var tip = function(bill) {
//    switch(true) {
//        case bill < 50:
//            return bill * 0.2;
//        case bill >= 50 && bill < 200:
//            return bill * 0.15;
//        case bill >= 200:
//            return bill * 0.1;
//        default:
//            return 0;
//    }
//}
//        
//var tips = [tip(bills[0]),tip(bills[1]),tip(bills[2])];
//var totals = [(bills[0]+tips[0]),(bills[1]+tips[1]),(bills[2]+tips[2])]
//
//console.log(bills);
//console.log(tips);
//console.log(totals);

/*
var john = {
    firstName: 'John',
    lastName: 'Kowalski',
    height: 1.8,
    weight: 100,
    calcBMI: function() {
        this.BMI = this.weight/(this.height*this.height);
    }
};


var kevin = {
    firstName: 'Kevin',
    lastName: 'Kowalski',
    height: 1.8,
    weight: 150,
    calcBMI: function() {
        this.BMI = this.weight/(this.height*this.height);
    }
};



john.calcBMI();
kevin.calcBMI();
console.log(john.BMI);
console.log(kevin.BMI);

if (john.BMI > kevin.BMI) 
    {
    console.log(john.firstName, john.lastName, john.BMI);
    }
else {console.log(kevin.firstName, kevin.lastName, kevin.BMI);}
*/
//var john = ['John', 'Smith', 1979, 'designer', true, 'blue'];
//
//for (var i = john.length - 1; i >= 0; i--) {
//    console.log(john[i]);
//}

var bill = {
 billValue : [124, 48, 268, 180, 42],
 tips : [],
 finals : [],
 calcTip : function() {for (var i = 0; i < this.billValue.length; i++) {
    if (this.billValue[i] < 50) {
        this.tips[i] = this.billValue[i] * 0.20;
        this.finals[i] = this.billValue[i] + this.tips[i];
    } 
    else if (this.billValue[i] >= 50 && this.billValue[i] < 200) {
        this.tips[i] = this.billValue[i]*0.15;
        this.finals[i] = this.billValue[i]+this.tips[i];
    }
    else this.tips[i] = this.billValue[i]*0.10;
        this.finals[i] = this.billValue[i]+this.tips[i];
}
    
}
    
}

//for (var i = 0; i < billValue.length; i++) {
//    if (billValue[i] < 50) {
//        tips[i] = billValue[i] * 0.20;
//        finals[i] = billValue[i] + tips[i];
//    } 
//    else if (billValue[i] >= 50 && billValue[i] < 200) {
//        tips[i] = billValue[i]*0.15;
//        finals[i] = billValue[i]+tips[i];
//    }
//    else tips[i] = billValue[i]*0.10;
//        finals[i] = billValue[i]+tips[i];
//}
bill.calcTip();
console.log(bill);




