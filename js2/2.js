/**
 * Write a function called solution that
 *   Takes in a function and returns an array.
 *
 * As long as the input function returns false,
 *   array keeps growing with the correspending index value
 * @param {function} fun
 * @returns {array}
 */


const solution = (fun, arr = []) => {
	if (fun(arr.length)){
		return arr;
	}
	arr.push(arr.length);
	return solution(fun, arr);
};

module.exports = {
	solution
};
