/**
 * Returns the middle value for a given array if odd and average if even
 * @param {number[]} arr - Array of Numbers
 * @returns {number} Middle Value
 */
export function getMiddleValue(arr) {
    arr.sort((a, b) => a - b);

    if (arr.length % 2 === 1) {
        // If the array length is odd, return the middle value
        return arr[Math.floor(arr.length / 2)];
    } else {
        // If the array length is even, return the average of the two middle values
        const mid1 = arr[arr.length / 2 - 1];
        const mid2 = arr[arr.length / 2];
        return (mid1 + mid2) / 2;
    }
}

// Test cases
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [30, 20, 10, 40, 50];

console.log(getMiddleValue(numbers1)); // Expected Output: 3
console.log(getMiddleValue(numbers2)); // Expected Output: 30
