/**
 * Replicate Array.prototype.map function and call it cMap
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_map.asp
 */

const solution = () => {
  Array.prototype.cMap = function (cb ,i=0, newArr=[]) {
    if(this.length === newArr.length){
      return newArr
    }
    newArr.push(cb(this[i], i, this))
    return this.cMap(cb,++i,newArr)
  }
}

module.exports = {
  solution
}
