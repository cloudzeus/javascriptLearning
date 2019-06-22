/* 
Create a function called "timeAdder" that can add two time values together. For example, it should be able to add 25 hours and 3 days together. 
The function should accept 4 parameters:
value1, label1, value2, label2
- value1 and value2 should accept positive integers  
- label1 and label2 should accept any of the following strings: "seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"
For example your function may be called in any of the following ways:
timeAdder(1,"minute",3,"minutes")
timeAdder(5,"days",25,"hours")
timeAdder(1,"minute",240,"seconds")

Requirements:
1. Your function should include at least one switch
2. Your function must accept any possible combination of inputs 
3. If the inputs are valid, it should return an array with 2 variables inside of it: value3, and  label3. For example:
return [5,"minutes"]; 
The exact label you choose to return for label3 ("minutes" for example) is up to you.
4. If the inputs are invalid or impossible, it should return false. Here are examples of impossible and invalid inputs:
timeAdder(5,"hour",5,"minutes") // This is impossible because "hour" is singular and 5 is plural
timeAdder(false,false,5,"minutes") // This is invalid because the first 2 arguments are not the correct types
timeAdder({},"days",5,"minutes") // This is invalid because the first argument is the wrong type
*/

function timeAdder(value1,label1,label2,value2){
    let firstLabel;
    let firstValue;
    let secondLabel;
    let secondValue;
    let fistValueSeconds;
    let secondValueSeconds;
    let totalSeconds;
    let finalResult;

    if(typeof value1 !== 'number'){console.log('This first argument is not a Number')}
    else if(typeof value2 !== 'number'){console.log('This fourth argument is not a Number')}
    else if(typeof label1 !== 'string'){console.log('The second argument is not a String')}
    else if(typeof label2 !== 'string'){console.log('The thirdargument is not a String')}
    else{
        firstLabel = label1;
        firstValue = value1;
        secondLabel = label2;
        secondValue = value2;
    }
    
    if(valuesCheck(firstValue,firstLabel) && valuesCheck(secondValue,secondLabel)){
        fistValueSeconds = secondsConvert(firstLabel,firstValue);
        secondValueSeconds = secondsConvert(secondLabel, secondValue);
        totalSeconds = fistValueSeconds + secondValueSeconds;
        finalResult = transformFromSeconds(totalSeconds);
        console.log(finalResult); 

    }



}
//We use this function to convert all values to seconds in order to add them laters
function secondsConvert(type,valueForConvertion){
 let totalSeconds;
 switch(type){
     case 'Seconds':
     case 'Second':
         totalSeconds = valueForConvertion;
     break;
     case 'minutes':
     case 'minute':
         totalSeconds = valueForConvertion * 60;
     break;
     case 'hours':
     case 'hour':
         totalSeconds = valueForConvertion * 3600;
     break;
     case 'days':
     case 'day':
         totalSeconds = valueForConvertion * 3600 * 24
     break
     default:
         console.log('you haven\'t provide valid values ');
 }
 return totalSeconds;

}

//this is a function to check if the given values are valid to our project
function valuesCheck(validationValueNum, validationValueLab){
    let checkValues
    switch(validationValueLab){
        case 'Second':
        case 'minute':
        case 'hour':
        case 'day':
            if(validationValueNum>1){
                checkValues=false;
                console.log('this is imposible because '+validationValueLab+' is singular and '+ validationValueNum + ' is pural');
            }else{
                checkValues=true;
            }
        break;
        case 'Seconds':
        case 'minutes':
        case 'hours':
        case 'days':
                    if(validationValueNum<1){
                        checkValues=false;
                        console.log('this is imposible because '+validationValueLab+' is pural and '+ validationValueNum + ' is singular');
                    }else{
                        checkValues=true;
                    }
                break;
        default:
            console.log('You have provide a label which is not in the list')
    }
    return checkValues;
    
}
// This function transoform the total seconds to most close value
function transformFromSeconds(totalSeconds){
    let finalDateType;
    let finalDateNum;
    let completeFinalDate 
    if(totalSeconds % 86400 === 0){
        finalDateNum = totalSeconds/86400;
        if(totalSeconds/86400 === 1){
            finalDateType = 'day';
        }else{ 
            finalDateType = 'days';}
    }
    else if(totalSeconds % 3600 === 0){
        finalDateNum = totalSeconds/3600;
        if(totalSeconds/3600 === 1){
            finalDateType = 'hour';
        }else{ 
            finalDateType = 'hours';}
    }
    else if(totalSeconds % 60 === 0){
        finalDateNum = totalSeconds/60;
        if(totalSeconds/60 === 1){
            finalDateType = 'minute';
        }else{ 
            finalDateType = 'minutes';}
    }else {
        finalDateNum = totalSeconds;
        if(totalSeconds === 1){
            finalDateType = 'Second';
        }else{ 
            finalDateType = 'Seconds';}
    }
    completeFinalDate = [finalDateNum,finalDateType];
    return completeFinalDate;
    
}

console.log('-------------------------------------Converts any value to seconds-------------------------------------------');
console.log(secondsConvert('day',10));
console.log('----------------------------- chech if the values are correct -----------------------------------------------');
console.log(valuesCheck(1,'Seconds'));
console.log('----------------------------- This function transforms the seconds to any convinitent value -----------------');
console.log(transformFromSeconds(1860));
console.log('------------------------------------ This the final function  -----------------------------------------------');
console.log(timeAdder(23,'hours','Seconds',3600));