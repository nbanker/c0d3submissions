/*
 * 2sum: write a function that takes in an array of numbers and a number, and returns true if any pairs add up to the number. (No duplicates)
 * @param {array} arr
 * @param {number} num
 * @returns {boolean}
 */

const solution = (arr, num, obj={})=>{
  return arr.find((e)=>{
    if(obj.hasOwnProperty([num - e])){
      return true
    }
    obj[e] = false
  }) !==undefined
}

module.exports = {
  solution
}
