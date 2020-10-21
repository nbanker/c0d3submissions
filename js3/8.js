/*
 * Write a function that takes in an object and a number (millieseconds).
 * - You must call each function value of the object {"nVal": (k) => {...}}
 * - {"nVal": (k) => {...When this function runs, k is "nVal"...}}
 * @param {object} obj
 * @param {number} num (millieseconds)
 * @call each function value of the object, millieseconds after each other
*/

solution = (obj=this, num, key = Object.keys(obj))=>{
  key.reduce((acc, e, i)=>{
    setTimeout(()=>{
      obj[e](e)
    }, num * i)
  }, {})
}

module.exports = {
  solution
}
