const prompt = require("prompt-sync")();
console.log("")
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
    const prompt = require("prompt-sync")();
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