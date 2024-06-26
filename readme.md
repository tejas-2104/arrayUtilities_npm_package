# Array Utils

`array-utils` is an npm package that adds helpful higher-order functions for arrays.

## Installation

To install `array-utils`, run the following command:

```sh
npm install array-utils
```
## Usage

```javascript
const arrayUtils = require('array-utils');

const myArray = [1, 2, 2, 3, 4, 4, 5];

console.log(arrayUtils.sum(myArray)); // 21
console.log(arrayUtils.unique(myArray)); // [1, 2, 3, 4, 5]
console.log(arrayUtils.max(myArray)); // 5
console.log(arrayUtils.min(myArray)); // 1
console.log(arrayUtils.average(myArray)); // 3
console.log(arrayUtils.median(myArray)); // 3
console.log(arrayUtils.mode(myArray)); // [2, 4]

arrayUtils.clear(myArray);
console.log(myArray); // []
```
## API

`sum(arr)`
Returns the sum of array elements.

`unique(arr)`
Returns a new array with duplicate elements removed.

`max(arr)`
Returns the maximum value in the array.

`min(arr)`
Returns the minimum value in the array.

`average(arr)`
Returns the average of array elements.

`clear(arr)`
Clears all elements in the array.

`ascend(arr)`
Sorts the array in ascending order.

`descend(arr)`
Sorts the array in descending order.

`median(arr)`
Returns the median of array elements.

`mode(arr)`
Returns an array of the most frequent element(s).

## License

MIT