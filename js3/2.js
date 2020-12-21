/**
 * takes in 2 integers, create 2d array of objects. First integer represents how many nested arrays within the array. Second integer represents how many objects within each array.
 * solution(4,2)
 * returns:
 * [
    [{x: 0, y: 0}, {x: 1, y: 0}],
    [{x: 0, y: 1}, {x: 1, y: 1}],
    [{x: 0, y: 2}, {x: 1, y: 2}],
    [{x: 0, y: 3}, {x: 1, y: 3}],
  ]
 * @param {integer} num1 {integer} num2
 * @return {array} arr
 */


const solution = (num1, num2, arr=[], subArr=[], i= 0)=>{
  const objCreator = (obj={x:0, y:0})=>{
      obj.x = subArr.length
      obj.y = i 
      return obj
  }

  const arrCreator = (j=0)=>{
    if(j < num2){
      subArr.push(objCreator())
      return arrCreator(j + 1)
    }
    return subArr
  }

  if(i < num1){
    arrCreator()
    arr.push(subArr)
    return solution(num1, num2, arr, subArr = [], i+1)
  }
  return arr

}

module.exports = {
  solution
}
