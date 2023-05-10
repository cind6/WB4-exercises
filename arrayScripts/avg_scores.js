"use strict";



 function getAverage(scores){

    // Step 1: Add up all the scores
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
     sum += scores[i];
    }
    // Step 2: Divide the sum by the number of scores
    let average = sum / scores.length;

   //return average 
   return average;

 }
 let myScores = [92, 98, 84, 76, 89, 99, 100 ]
 let yourScores = [82, 98, 94, 88, 92, 100, 100];


// Call getAverage() function with myScores array
let myAverage = getAverage(myScores);
let yourAverage = getAverage(yourScores);

// Display the average score
console.log("My average score is " + myAverage.toFixed(0));
console.log("Your average score is " + yourAverage.toFixed(0));