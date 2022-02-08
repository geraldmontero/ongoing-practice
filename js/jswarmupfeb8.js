//Write a function that removes any duplicates from an array.
   // Input: [2,3,5,8,3,1,2,6,3,2,7,8,2,4,7]
//expected output: [2,3,5,8,1,6,7,4]

let myArray = [2,3,5,8,3,1,2,6,3,2,7,8,2,4,7];

function removeDuplicates(myArray) {
    return myArray.filter((item,
                       index) => myArray.indexOf(item) === index);
}

console.log(removeDuplicates(myArray));