/*
You're about to do an assignment called "Fizz Buzz", which is one of the classic programming challenges. It is a favorite for interviewers, and a shocking number of job-applicants can't get it right. But you won't be one of those people. Here are the rules for the assignment (as specified by Imran Gory):

Write a program that prints the numbers from 1 to 100.
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
For numbers which are multiples of both three and five print "FizzBuzz".
Extra Credit:

Instead of only printing "fizz", "buzz", and "fizzbuzz", add a fourth print statement: "prime". 
You should print this whenever you encounter a number that is prime (divisible only by itself and one). As you implement this, don't worry about the efficiency of the algorithm you use to check for primes. It's okay for it to be slow.

*/
let counter;
for(i=1; i<=100; i++){
// first of all we start with the most complex condition and we check the mod for 3 and 5 if the conditions is true we print
//the fizzbuzz and we continue in order to avoid the print of buzz and fizz     
    if(i%3===0 && i%5===0){
        console.log('fizzBuzz');
        continue;
// here we check the mod of 5 and we print the buzz
    }else if (i%5===0){
        console.log('Buzz');
    }else if(i%3===0)
// We do the same for mod 3 and print tje fizz    
    {
        console.log('fizz');
    } else{
// here is the extra bonus and we have to make the check to meet all the conditions and we assign this to value of c as a flag 
        let c = 0;
        let p;
        for(p=1; p<=i; p++){
            if(i%p ===0){
                c= c+1;
            }
        }
        if(c===2){
            console.log('The Number '+ i +' is prime Number');
        }else{
            console.log(i);
        }
        
    }
}