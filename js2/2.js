/**
 * Write a function called solution that
 *   Takes in a function and returns an array.
 *
 * As long as the input function returns false,
 *   array keeps growing with the correspending index value
 * @param {function} fun
 * @returns {array}
 */

// const solution = (fun, i = 0, arr = []) => {
// 	if (fun() === true || fun(i) === true) {
// 		return arr;
// 	}
// 	arr.push(i);
// 	return solution(fun, ++i, arr);
// };

const solution = (fun, i = 0, arr = []) => {
	if (fun(i) === false) {
		arr.push(i++);
		return solution(fun, i, arr);
	}
	return arr;
};

module.exports = {
	solution
};
