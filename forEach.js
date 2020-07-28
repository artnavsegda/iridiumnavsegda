/**
 * Array.prototype.forEach() polyfill
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
