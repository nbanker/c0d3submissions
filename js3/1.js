/**
 * given arr of strings (keys) and an object, return an array of values.
 * @param {array} arr {object} obj
 * @returns {array} arr
 */

const solution = (arr, obj, newArr=[]) => {
  arr.forEach((e)=>{
    if(obj[e]){
      newArr.push(obj[e])
    }
  })
  return newArr
}

module.exports = {
  solution
}
