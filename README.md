 # AlgoCasts

Companion repo to [The Coding Inteview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/)

# reverse()  
The first array element becomes the last, and the last array element becomes the first.
Example:
```
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]
```

```
var a = ['one', 'two', 'three']
a.reverse();

console.log(a) // ['three', 'two', 'one']
```

# every()  
It is the method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
Example:
```
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
```

# sign()
Returns either a positive or negative +/- 1, indicating the sign of a number passed into the argument. If the number passed into Math.sign() is 0, it will return a +/- 0. Note that if the number is positive, an explicit (+) will not be returned.
Example:
```
console.log(Math.sign(3));
// expected output: 1

console.log(Math.sign(-3));
// expected output: -1
```

# fizzbuzz === %
Example:
```
for (var i=1; i <= 20; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}
```
```
12 $ 3 === 0
true (3 * 4 = 12) 
11 $ 3 === 0
false (3 * 3 = 9 and 2)
```

# slice()
The method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
Example:
```
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

```

# replace()
The method returns a new string with some or all matches of a pattern replaced by a replacement. If pattern is a string, only the first occurrence will be replaced.
Example: 
```
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
```

# sort() 
The method sorts the elements of an array in place and returns the sorted array. 
Example:
```
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
// expected output: Array [1, 100000, 21, 30, 4]
```

# join()
The method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
Example:
```
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```

# split()
The method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.
Example:
```
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]
```

# includes()
The method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
Example:
```
const str = 'To be, or not to be, that is the question.'

console.log(str.includes('To be'))        // true
console.log(str.includes('question'))     // true
console.log(str.includes('nonexistent'))  // false
console.log(str.includes('To be', 1))     // false
console.log(str.includes('TO BE'))        // false
console.log(str.includes(''))             // true
```

# match()
The method retrieves the result of matching a string against a regular expression.
Example:
```
const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const regexp = /[A-E]/gi;
const matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

### Data structures 
Ways of organizing information of optimal 'runtime complexity' of adding or removing records.

# unshift()
Add new items to the beginning of an array.
Example:
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");

// Lemon, Pineapple, Banana, Orange, Apple, Mango 
```

# pop()
The removes the last element of an array, and returns that element.
Example:
```
const number = [1, 2, 3, 4, 10];
number.pop()

console.log(number);
// [1, 2, 3, 4]

```

# shift()
The method removes the first item of an array.
Example: 
```
const number = [1, 2, 3, 4, 10];
number.shift()

console.log(number);
// [2, 3, 4, 10]
```

# push() 
The method adds new items to the end of an array, and returns the new length.
Example:
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

console.log(fruits);
// ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
```

### Generator
A generator is a special type of function that acts as a factory for iterators. A function becomes a generator when it contains at least one expression and when it uses function *.
Examples:
```
function* wordSequence() {
	yield 'dog';
    yield 'plum';
    yield 'tree';
}

const word = wordSequence();
console.log(word.next());
// done: false, value: "dog"
console.log(word.next());
// done: false, value: "plum"
```

#### Bubble Sort
```
function bubbleSort(arr) {
		
    for (let i = 0; i < arr.length - 1; i++) {
    	for (let j = 0; j < arr.length - 1 - i; j++) {
      	if (arr[j] > arr[j + 1]) {
        	let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
      
    return arr;
}

console.log(bubbleSort([3, 2, 1]));
// 1, 2, 3
```

### Selection Sort
```
function selectionSort(arr) {

	for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
            min = j;
          }
          
          let temp = arr[i];
          arr[i] = arr[min];
          arr[min] = temp;
        }
    }
  
	return arr;
}

console.log(selectionSort([9, 8 ,7])); 
// 7, 8, 9
```