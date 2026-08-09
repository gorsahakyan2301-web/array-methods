// 1. Create a script that prompts the visitor to enter two numbers and then shows their sum.
/* let a = +prompt("Enter a", 0);
let b = +prompt("Enter b", 0);
alert(a + b); */


/* 2. According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.
For instance:
alert( 1.35.toFixed(1) ); // 1.4
In the similar example below, why is 6.35 rounded to 6.3, not 6.4?
alert( 6.35.toFixed(1) ); // 6.3
How to round 6.35 the right way? */
// alert(Math.round(6.35 * 10) / 10)


/* 3. Repeat until the input is a number
Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
The resulting value must be returned as a number.
The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null. */
/* function readNumber(){
    let num;
    while(!isFinite(num)){
        num = prompt("Enter value", 0);
    }
    if (num === null || num === " ") return null;
    return +num;
}
alert(readNumber()) */


/* 4.The built-in function Math.random() creates a random value from 0 to 1 (not including 1).
Write the function random(min, max) to generate a random floating-point number from min to max (not including max). */
/* function random(min, max) {
    return min + Math.random() * (max - min);
}
alert(random(1, 5)); */


/* 5.Create a function randomInteger(min, max) that generates a random integer number
from min to max including both min and max as possible values.
Any number from the interval min..max must appear with the same probability. */
/* function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}
alert( randomInteger(1, 3) ); */


// 6. Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
/* function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}
alert( ucFirst("john") ); */


// 7. Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
/* function checkSpam(str){
    let lowerStr = str.toLowerCase();
    if (lowerStr.includes("viagra") || lowerStr.includes("xxx")) return true;
    return false
}
alert(checkSpam("He drink Viagra"));
alert(checkSpam("free XXX"));
alert(checkSpam("anybody")); */


/* 8. Create a function truncate(str, maxlength) that checks the length of the str and, 
if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
The result of the function should be the truncated (if needed) string. */
/* function truncate(str,maxlength){
    if (str.length < maxlength){
        return str;
    }else{
        return str.slice(0, maxlength -1) + "..";
    }
}
alert(truncate("where are you going now?",10));
alert(truncate("HI everybody",10)); */


/* 9. We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it. */
/* function extractCurrencyValue(str){
    return +str.slice(1);
}
alert(extractCurrencyValue(`$120`) === 120); */


/* 10. Let’s try 5 array operations.
Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array. */
/* let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert(styles.shift());
styles.unshift("Rap", "Reggae");
alert(styles); */


/* 11.Write the function sumInput() that:
Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero. */
/* function sumInput(){
    let arr = [];
    let value;
    while(true){
        value = prompt("Enter value", 0);
        if (value === null || value === "" || !isFinite(value) ) break;
        arr.push(+value);
    }
    let sum = 0;
    for(let numbers of arr ){
        sum += numbers;
    }
    return sum;
}
alert(sumInput()); */


/* 12. The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
The task is: find the contiguous subarray of arr with the maximal sum of items.
Write the function getMaxSubSum(arr) that will return that sum. */
/* function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;
  for (let item of arr) { 
    partialSum += item; 
    maxSum = Math.max(maxSum, partialSum); 
    if (partialSum < 0) partialSum = 0; 
  }
  return maxSum;
}
alert( getMaxSubSum([-1, 2, 3, -9]) ); 
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); 
alert( getMaxSubSum([-2, -1, 1, 2]) ); 
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); 
alert( getMaxSubSum([1, 2, 3]) ); 
alert( getMaxSubSum([-1, -2, -3]) );  */