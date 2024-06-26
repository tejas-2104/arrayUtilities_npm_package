
const arrayUtils = require('../src/index.js');

const testArray = [1, 2, 2, 3, 4, 4, 5];

console.log('Sum:', arrayUtils.sum(testArray));
console.log('Unique:', arrayUtils.unique(testArray));
console.log('Max:', arrayUtils.max(testArray));
console.log('Min:', arrayUtils.min(testArray));
console.log('Average:', arrayUtils.average(testArray));
console.log('Median:', arrayUtils.median(testArray));
console.log('Mode:', arrayUtils.mode(testArray));

arrayUtils.clear(testArray);
console.log('Cleared Array:', testArray);
