// write a function that takes a string as argument and returns the number of vowels contained in that string.
//     The vowels are .
// input: "helicopter"
// output: 4
// reason: there are 4 vowels in the input word helicopter

// let vowels = [ 'a, e, i, o, u' ];
// function countVowels(subject) {
//     console.log( subject.match(/[aeiou]/gi).length)
// }

let string = "helicopter"
function getVowels(string) {
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
    console.log(m)
}
