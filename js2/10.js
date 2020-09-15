/**
 * Replicate Array.prototype.filter and call it cFilter
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_filter.asp
 */

const solution = () => {
  Array.prototype.cFilter = function(cb, e, i = 0, arr, newArr=[]){
    if(this.length === i){
    return newArr
    }
    if(cb(this[i], i, this)){
      newArr.push(this[i])
    }
    return this.cFilter(cb, e, ++i, arr, newArr)
  }
}

module.exports = {
  solution
}
