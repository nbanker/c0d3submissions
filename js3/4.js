/*
 * 2sum: write a function that takes in an array of numbers and a number, and returns true if any pairs add up to the number. (No duplicates)
 * @param {array} arr
 * @param {number} num
 * @returns {boolean}
 */

const solution = (arr, num, obj={}, found = false)=>{
  
  arr.forEach((e, i)=>{
  if(!!obj[num-e]){
  found = true
  }
  obj[e] = i
  })
  return found
}


module.exports = {
  solution
}
