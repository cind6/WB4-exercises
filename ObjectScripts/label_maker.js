"use strict";
let myInfo = {
    name: "Pursalane Faye",
    address: "121 Main Street",
    city: "membroke",
    state: "Texas",
    zip: "76126"
   };

function printContact(myInfo){

    console.log(myInfo.name);
    console.log(myInfo.address)
    console.log(myInfo.city + ", " + myInfo.state + " " + myInfo.zip);
}


   printContact(myInfo);