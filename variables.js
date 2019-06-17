/* 
THIS IS THE ASSIGNMENT OF THE VARIABLES 
AT THE FOLLOWING LINES WE ARE GOING TO USE THE 3 TYPES OF DECLARATION FOR VARIABLES
::::::::::::::::::::::::::::::::HOISTING::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
hoisting has to do with the way we declare and initlize the variables and the scope of each variable. As
per the best practice we have to declare and initialize the variables above of the functions in order to avoid 
undefined errors. Hoisting always has to do with the declarations  and not  the initilization so we have 
to declare and initialize  all variables at the top of their scope
*/
// BAD PRACTICE AT THAT CASE WE ARE NOT GOING TO GET AN ERROR BUT WE GET INDEFINED
var badExample;
console.log(badExample);
badExample="what ever since it is not going to work";
// GOOD PRACTICE BECAUSE BOTH DECLARATIONS AND INITILIZATION ARE AT THE TOP OF THEIR SCOPE
var goodExample;
goodExample="This is going to be executed with the console log";
console.log(goodExample);

/*
::::::::::::::::::::::::: VAR :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Vars are the traditional way for declaring variables in ES5 there are some cases
where we might get confused at the scope of the variables which can cause some unexpected 
results which will be explained at the following examples of code
*/
function varScope (){
    var forNesting = true;
    if(forNesting){
        var firtsNestScope = "I am inside that condition";
    }
    console.log("-----------------------------------------------------------------------------------------------------------------------");
    console.log("the results bellow are showing me a variable which lives inside the true false condition and it should be accessible");
    console.log(firtsNestScope);
    console.log("-----------------------------------------------------------------------------------------------------------------------");
    console.log("The worst part is that I can assign a new value outside the scope and get the results of the function see bellow");
    //at that part I am reassign the value of the firstNestScope variable
    firtsNestScope = "This is the value which has been reassigned and the function incokes with that";
    console.log(firtsNestScope);
    console.log("-----------------------------------------------------------------------------------------------------------------------");
                    }
varScope();

/*
::::::::::::::::::::::::::::::::::::::::::::::::::: LET :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
In order to avoid the above issues we have the option of declaring the values with let. Let give us the ability to define 
the scope of the variable. Let is block defined so replacing the above code with let we will get an error


function varScope (){
    var forNesting = true;
    if(forNesting){
        let firtsNestScope = "I am inside that condition";
    }
    console.log("-----------------------------------------------------------------------------------------------------------------------");
    console.log("the results bellow are showing me a variable which lives inside the true false condition and it should be accessible");
    console.log(firtsNestScope);
    console.log("-----------------------------------------------------------------------------------------------------------------------");
    console.log("The worst part is that I can assign a new value outside the scope and get the results of the function see bellow");
    //at that part I am reassign the value of the firstNestScope variable
    firtsNestScope = "This is the value which has been reassigned and the function incokes with that";
    console.log(firtsNestScope);
    console.log("-----------------------------------------------------------------------------------------------------------------------");
                    }
varScope();
*/
//LET EXAMPLE

function letExample(){
    let firstVar = true;
    let secondVar;

    if (firstVar){
        secondVar="Here we assign the value of the secondVar if the statement is true";
        console.log(secondVar);
    }else{
        secondVar= "Here is the value of second var if the conditions is not true";
        console.log(secondVar);
    }
    console.log("\n outside the condition the value is "+secondVar);

    console.log('=============================== END OF LET EXAMPLE ====================================================')

}
letExample();

/*
::::::::::::::::::::::::::::::::::::::::::::::::::: CONST :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
ES6 introduce also const which is similar to let as much as concern the block scope but it is used define variables which we don't want to 
be changed at the flow of our code. That can be an API KEY and the convention for naming is in capital letters. They are similar to pointers 
so they have been assigned to the memory once. You can edit them but not reassign them
*/

const PI = 3.14;
let circumference = 30;
let diameter;

function findDIameter(){
    diameter = circumference / PI;  
    console.log("=============================== bellow is the calculation of the diameter -------------------");  
    console.log(diameter);
}

findDIameter();


