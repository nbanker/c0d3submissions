/**
 * Write a function called solution that
 *   Takes in 2 numbers and
 *   returns an array with the length equal to the first input number.
 *     Every element in the returned array is an array,
 *        with length equal to  the second input number.
 *     All values in the array is 0.
 * @param {number} row
 * @param {number} col
 * @returns {array}
 */

const createInnerArr = (col, arr = []) => {
	if (col === arr.length) {
		return arr;
  }
  arr.push(0)
	return createInnerArr(col, arr);
};

const solution = (row, col, res = []) => {
	if (res.length === row) {
		return res;
	}
	res.push(createInnerArr(col));
	return solution(row, col, res);
};

module.exports = {
	solution
};
