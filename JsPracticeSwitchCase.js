const prompt = require("prompt-sync")();
console.log("1. RandomLargestSmallest, 2. RandomLargestSmallestSort, 3. PrimeFactors, 4. AddsToZero, 5. RepeatingNumber, " +
    "6. DiceGame, 7. BirthDayInSameMonth");
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
    case 5:
        RepeatingNumber();
        break;
    case 6:
        DiceGame();
        break;
    case 7:
        SameBirthDay();
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
            if (number[i] > number[j]) {
                temp = number[i];
                number[i] = number[j];
                number[j] = temp;
            }
        }
    }
    console.log("Sorted Array : " + number);
    console.log("Second minimum value is: " + number[1]);
    console.log("Second maximum value is: " + number[number.length - 2]);
}

function PrimeFactors() {
    let count = 0;
    let numberIsPrime = 0;
    let result = [];
    let number = parseInt(prompt("Enter number to get its Prime Factors : "));

    for (i = 2; i <= number; i++) {
        if (number % i == 0) {
            numberIsPrime = 1;
            for (j = 2; j <= i / 2; j++) {
                if (i % j == 0) {
                    numberIsPrime = 0;
                    break;
                }
            }
            if (numberIsPrime == 1) {
                result[count] = i;
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
    if (sum == 0) {
        console.log("Triplets are : " + a + " + " + b + " + " + c + " = 0")
    }
    else {
        console.log("Triplets don't add to zero")
    }
}

function RepeatingNumber() {
    let count = 0;
    const number = [];
    let start = parseInt(prompt("Starting Range : "));
    let end = parseInt(prompt("Ending Range : "));
    while (start <= end) {
        if (start % 11 == 0) {
            number[count] = start;
            count++;
        }
        start++;
    }
    console.log('Repeating numbers are: ' + number);
}

function DiceGame() {
    let count = 1;
    let maxCount = 1;
    let minCount = 11;
    let numberWithMaxCount = 0;
    let numberWithMinCount = 0;
    let stopCount = 0;
    let countForArray = 0;
    let minNumbers = [];
    let diceCountMap = new Map();
    function rollDie() {
        let diceValue = Math.floor(Math.random() * 6 + 1);
        console.log("Dice Value : " + diceValue);
        return diceValue;
    }
    while (stopCount < 10) {
        let diceValue = rollDie();
        if (diceCountMap.has(diceValue)) {
            count = diceCountMap.get(diceValue) + 1;
        }
        diceCountMap.set(diceValue, count);
        if (count > stopCount)
            stopCount = count;
    }
    diceCountMap.forEach((values, keys) => {
        if (values > maxCount) {
            maxCount = values;
            numberWithMaxCount = keys;
        }
        if (values < minCount) {
            minCount = values;
            numberWithMinCount = keys;
        }
    })
    console.log("\nDie Map : ");
    diceCountMap.forEach((values, keys) => {
        console.log("Value On Dice : " + keys + " , No. Of Times : " + values)
        if (minCount == values) {
            minNumbers[countForArray] = keys;
            countForArray++;
        }
    })
    console.log("\nNumber with Min Count : " + minNumbers + "\nNumber with Max Count : " + numberWithMaxCount);
}

function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString('en-US', { month: 'long' });
}

function SameBirthDay() {
    let monthsMap = new Map([
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
        [5, 0],
        [6, 0],
        [7, 0],
        [8, 0],
        [9, 0],
        [10, 0],
        [11, 0],
        [12, 0]
    ]);
    for (let i = 1; i <= 50; i++) {
        let randomMonth = Math.floor(Math.random() * 12 + 1);
        let count = monthsMap.get(randomMonth);
        monthsMap.set(randomMonth, count + 1);
    }
    monthsMap.forEach((values, keys) => {
        console.log(values + " Person have BirthDay in the month of " + getMonthName(keys));
    })
}