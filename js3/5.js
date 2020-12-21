/*
 * Given object of key: string values and an object of key: function values, call the functions in 2nd object, using the values in 1st object as function params
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 **/

const solution = (obj1, obj2, obj={}) => {
  const keys = Object.keys(obj1)
  keys.forEach((e)=>{
    if(obj2.hasOwnProperty(e)){
    return obj[e] = obj2[e](obj1[e])
    }
    obj[e] = obj1[e]
  }) 
  
  return obj
}
module.exports = {
  solution
}
