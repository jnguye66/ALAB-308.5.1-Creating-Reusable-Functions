/**
 * Any of the examples below will accomplish the
 * same task: reversing a string.
 * 
 * Which of these examples is best? Why?
 * Note that there is no "correct" answer.
 */
function reverseString(str) {
    const strArray = str.split("");
    const revArray = strArray.reverse();
    const revString = revArray.join("");
    return revString;
}

function reverseString2(str) {
    return str.split("").reverse().join("");
}

function reverseString3(str) {
    let revString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revString += str[i];
    }
    return revString;
}

function reverseString4(str) {
    if (str === "") return "";
    else return reverseString4(str.substr(1)) + str.charAt(0);
}

function reverseString5(str) {
    return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("!dlroW olleH"));
console.log(reverseString2("!dlroW olleH"));
console.log(reverseString3("!dlroW olleH"));
console.log(reverseString4("!dlroW olleH"));
console.log(reverseString5("!dlroW olleH"));

//////////////////////////////////////////////////////////////////////////
// Part 1: Thinking Functionally

// a) Function that takes an array of numbers and return the sum
function sum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

// b) Function that takes an array of numbers and return the average
function avg(arr){
    let avg = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg;
}

// c) Function that takes an array of strings and return the longest string
function longestString(arr){
    let max = ""; // Longest String
    let current = ""; // Current String

    let maxLength = 0; // Longest String Length
    let currentLength = 0; // Current String Length
    for (let i = 0; i < arr.length; i++){
        current = arr[i];
        currentLength = arr[i].length;
        if (currentLength > maxLength){ // if length of current string is less than the length of the longest string
            max = current;
            maxLength = currentLength; // Update String to longer string
        }
    }
    return max;
}

// d) Function that takes an array of strings, and a number, and returns an array of the strings that are longer than the given number
function arrLongestString(arr, minLength){
    let current = ""; // Current String
    let arrMinLength = [];

    let currentLength = 0; // Current String Length
    for (let i = 0; i < arr.length; i++){
        current = arr[i];
        currentLength = arr[i].length;
        if (currentLength > minLength){ // if current length greater than minLength, push current into arrMinLength
            arrMinLength.push(current);
        }
    }
    return arrMinLength;
}

// e) Function that takes a number, n, and print every number between 1 and n without using loops. Use recursion.
function recursionCounting(n){
    let nums = "";
    if (n > 1){
        recursionCounting(n - 1);
    }
    nums += n + " ";
    console.log(nums)
    return;
}

//////////////////////////////////////////////////////////////////////////
// Part 2: Thinking Methodically

// a) Function that sorts age from youngest to oldest
function sortAge(arr) { 
    sortedArr = arr.sort((a, b) => a.age - b.age);
    return sortedArr;
}

// b) Function that filters the array to remove entries with an age greater than 50
function over50(arr){
    let temp = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i].age > 50){
            temp.push(arr[i]);
        }
    }
    return temp;
}

// c) Function that maps the array to change the occupation key to job and increment every age by 1
function changeOccToJobAndIncrementAgeByOne(arr){
    arr.forEach((n, i) => {
        arr[i].job = arr[i].occupation; // New 'job' key holds 'occupation' values
        delete arr[i].occupation; // Delete old 'occupation'
        arr[i].age++; // Increment ages by 1
    });
    return;
}

// d) Function that adds up the ages, and then averages them
function avgAge(arr) {
    let totalAge = arr.reduce((a, b) => ({age: a.age + b.age})) // Reduce method to get sum of ages
    return Object.values(totalAge) / arr.length; // Get value of totalAge, it holds age key, and divide by num of objects
}

//////////////////////////////////////////////////////////////////////////
// Part 3: Thinking Critically

// a) Function that takes an object and increments it's age field
function incAge(obj){
    return obj.age += 1;
}



let obj1 = { 
    id: "42",
    name: "Bruce",
    occupation: "Knight",
    age: 41
};

let obj2 = { 
    id: "48",
    name: "Barry",
    occupation: "Runner",
    age: 25
};

let obj3 = { 
    id: "57",
    name: "Bob",
    occupation: "Fry Cook",
    age: 19
};

let obj4 = { 
    id: "63",
    name: "Blaine",
    occupation: "Quiz Master",
    age: 58
};

let obj5 = {
    id: "7",
    name: "Bilbo",
    occupation: "None",
    age: 111
};

let objArr = [obj1, obj2, obj3, obj4, obj5];




/**
 * Testing Functions
 */

// let objTest = {
//     age: 20
// }

// let numArr = [1,2,3,4];

// console.log(sum(numArr)); // 10
// console.log(avg(numArr)); // 10 / 4 = 2.5

// let str = "hello";
// console.log(str.length)

// let strArr = ["hi", "hello", "hey"];
// console.log(longestString(strArr));

// console.log(arrLongestString(strArr, 3));
// console.log(arrLongestString(strArr, 2));

// console.log(recursionCounting(10)) - Test for recursionCounting()

// console.log(sortAge(objArr)); - Test for sortAge()

// console.log(over50(objArr)); - Test for over50()

// changeOccToJobAndIncrementAgeByOne(objArr); - Test for changeOccToJobAndIncrementAgeByOne()
// console.log(objArr);

// console.log(avgAge(objArr)); - Test for avgAge()

// console.log(incAge(objTest)); - Test for incAge()