/**
 * Replicate Array.prototype.reduce and call it cReduce
 * Documentation:
 *     Replicate Array.prototype.reduce and call it cReduce
 */

const solution = () => {
  Array.prototype.cReduce = function (cb, acc=0, e, i=0) {
    if(i === this.length){
    return acc
    }
    acc = cb(acc, this[i], i, this)

    return this.cReduce(cb, acc, e, i+1, this)
  }
}

module.exports = {
  solution
}
