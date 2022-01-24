// PROBLEM:  write a function that accepts a string of numbers and returns the sum of those numbers
// INPUT 1: "42958372" --- EXPECTED OUTPUT 1: 40
// INPUT 2: "917485"      --- EXPECTED OUTPUT 2: 34 (edited)

//     let str = "42958372"
//
//     function sumStr(str){
//     let strArr = str.split("");
//     let sum = strArr.reduce(function(total, num){
//         return parseFloat(total) + parseFloat(num);
//     });
//
//     console.log(sum);
// }
//
// sumStr();

function sumDigitsFromString(str) {
    var sum = 0;
    var numbers = str.match(/\d+/g).map(Number);
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}
let str = "42958372"
sumDigitsFromString();