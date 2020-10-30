/*
 * write a map function for objects
 * @param {callback} cb
 * @returns {number}
*/

const solution = () => {
  Object.prototype.map = function(fn, keys = Object.keys(this), values = Object.values(this), i = 0, ans=[]){
    if(keys.length === i) return ans
    ans.push(fn(keys[i], values[i], i))
    return this.map(fn, keys, values, i + 1, ans)
    }
}

module.exports = {
  solution
}
