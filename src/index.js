
const sum = function(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
};

const unique = function(arr) {
    return [...new Set(arr)];
};

const max = function(arr) {
    return Math.max(...arr);
};

const min = function(arr) {
    return Math.min(...arr);
};

const average = function(arr) {
    return sum(arr) / arr.length;
};

const clear = function(arr) {
    arr.length = 0;
};

const ascend = function(arr) {
    return arr.sort((a, b) => a - b);
};

const descend = function(arr) {
    return arr.sort((a, b) => b - a);
};

const median = function(arr) {
    const sorted = ascend([...arr]);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
};

const mode = function(arr) {
    const frequency = {};
    arr.forEach(val => frequency[val] = (frequency[val] || 0) + 1);
    const maxFrequency = Math.max(...Object.values(frequency));
    return Object.keys(frequency).filter(key => frequency[key] === maxFrequency).map(Number);
};

module.exports = {
    sum,
    unique,
    max,
    min,
    average,
    clear,
    ascend,
    descend,
    median,
    mode
};
