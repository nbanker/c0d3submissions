/*
 * Write a function that takes in an object and a number (millieseconds).
 * - You must call each function value of the object {"nVal": (k) => {...}}
 * - {"nVal": (k) => {...When this function runs, k is "nVal"...}}
 * @param {object} obj
 * @param {number} num (millieseconds)
 * @call each function value of the object, millieseconds after each other
*/

solution = (obj, num, i=0, keys = Object.keys(obj))=>{
  if(obj[keys[i]]){
    obj[keys[i]](keys[i])
    setTimeout(()=>{
      solution(obj, num, i + 1, keys)
    },num)
  } return 
}

module.exports = {
  solution
}
