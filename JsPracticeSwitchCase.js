const prompt = require("prompt-sync")();
console.log("1. RandomLargestSmallest, 2. RandomLargestSmallestSort, 3. PrimeFactors, 4. AddsToZero")
    let choice = parseInt(prompt("Enter The Choice : "))

switch (choice) {
    case 1:
      RandomLargestSmallest();
      break;
    case 2:
      RandomLargestSmallestSorting();
      break;
    case 3:
      PrimeFactors();
      break;
    case 4:
      AddsToZero();
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

function RandomLargestSmallestSorting() {
        let count = 0;
        let temp = 0;
    const number = [];

    while (count < 10) {
        number[count] = Math.floor(Math.random() * 900 + 100);
        count++;
    }
    console.log("Random numbers: " + number);

    for (i = 0; i < 10; i++) {
        for (j = i; j < 10; j++) {
            if (number[i]  > number[j]) {
                temp = number[i];
                number[i] = number[j];
                number[j] = temp;
            }
        }
    }
    console.log("Sorted Array : " + number);
    console.log("Second minimum value is: " +number[1]);
    console.log("Second maximum value is: " +number[number.length - 2]);
}

function PrimeFactors() {
    let count = 0;
    let numberIsPrime = 0;
    let result = [];
    let number = parseInt(prompt("Enter number to get its Prime Factors : "));

    for ( i = 2; i <= number; i++ ) {
        if ( number % i == 0) {
            numberIsPrime = 1;
            for ( j = 2; j <= i / 2; j++) {
                if ( i % j == 0) {
                    numberIsPrime = 0;
                    break;
                }
            }
            if ( numberIsPrime == 1 ) {
                result [count] = i;
                count++;
            }
        }
    }
    console.log(result);
}

function AddsToZero() {
let a = parseInt(prompt("Enter First Number"));
let b = parseInt(prompt("Enter Second Number"));
let c = parseInt(prompt("Enter Third Number"));
let sum = a + b + c;
if(sum == 0) {
    console.log("Triplets are : " + a + " + " + b + " + " + c + " = 0")
}
else {
    console.log("Triplets don't add to zero")
}
}