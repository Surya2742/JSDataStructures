const prompt = require("prompt-sync")();
console.log("")
let choice = parseInt(prompt("Enter The Choice : "))

switch (choice) {
    case 1:
      RandomLargestSmallest();
      break;
}

function RandomLargestSmallest() {
    let count = 0;
    const number = [];
    
    while (count < 10) {
        number[count] = Math.floor(Math.random() * 900 + 100);
        count++;
    }
    console.log("Random numbers: " + number);
   
    let max = number[1];
    let min = number[1];
    let secondMax = number[1];
    let secondMin = number[1];
    
    for (i = 0; i < number.length - 1; i++) {
       if (number[i] > max) {
          max = number[i];
       }
       if (number[i] < min) {
           min = number[i];
       }
       }
    for (i = 0; i < number.length - 1; i++) {
       if (number[i] > secondMax && number[i] < max) {
            secondMax = number[i];
       }
       if (number[i] < secondMin && number[i] > min) {
            secondMin = number[i];
        }
    }
    console.log("Second Max is: " + secondMax);
    console.log("Second Min is: " + secondMin);
}