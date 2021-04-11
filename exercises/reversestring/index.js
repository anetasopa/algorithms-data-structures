// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// ############ 3 SOLUTION #################

function reverse(str) {
    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '');
}

module.exports = reverse;

// ############ 1 SOLUTION #################
// function reverse(str) {
//     const arr = str.split('');
//     arr.split('');
//
//     return arr.join('');
// }

// Other resolve
// function reverse(str) {
//     return str
//     .split('')
//     .reverse('')
//     .join('');
// }

// ############ 2 SOLUTION #################
// function reverse(str) {
//     let reverse = '';
//     for (let char of str) {
//         reverse = char + reverse;
//     }

//     return reverse;
// }