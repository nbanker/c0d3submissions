/*
 * write a function that takes in an array of numbers, and returns a new array of all duplicate numbers
 * @param {array} arr
 * @returns {array}
*/

const solution = (arr, obj ={}, newArr=[])=>{
  arr.forEach((e)=>{
    if(obj.hasOwnProperty(e) && obj[e] < 2){
      obj[e] += 1
      newArr.push(e)
    }
    obj[e] = (obj[e] || 1)
  })
  return newArr
}

module.exports = {
  solution
}
