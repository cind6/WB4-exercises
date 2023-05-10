"use strict";

function getMealCost(mylunch) {
    let subTotal = 0;
    
    for (let i = 0; i < mylunch.length; i++) {
        subTotal += mylunch[i].price;
    }

    return subTotal;
}


let myLunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
];

let subTotal = getMealCost(myLunch);
// Calculate tax and tip
let tip = subTotal * 0.18
let tax = subTotal * 0.08

// Calculate total due
let totalDue = subTotal + tax + tip

//Display Results
console.log("subtotal: $" + subTotal.toFixed(2));
console.log("tax: $" + tax.toFixed(2));
console.log("tip: $" + tip.toFixed(2));
console.log("Total Due: $" + totalDue.toFixed(2)); 