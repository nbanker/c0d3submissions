/*
 * write a map function for objects
 * @param {callback} cb
 * @returns {number}
*/

const solution = () => {
  Object.prototype.map = function(fn, key = Object.keys(this), value = Object.values(this), i = 0, entries = Object.entries(this), ans=[]){
    if(entries.length === i) return ans
    ans.push(fn(key[i], value[i], i))
    return this.map(fn, key, value, i + 1, entries, ans)
    }
}

module.exports = {
  solution
}
