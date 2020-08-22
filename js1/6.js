/**
 * Write a function called solution that
 *   takes in a number
 *   and returns true if the number is a prime number
 *   false otherwise
 * @param {number} num
 * @returns {boolean}
 */

const solution = (num, i = 2) => {
	if (num < i) {
		return false;
	}
	if (num === i) {
		return true;
	}
	if (num % i === 0) {
		return false;
	}
	return solution(num, ++i);
};

module.exports = {
	solution
};
