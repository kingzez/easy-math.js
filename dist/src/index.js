"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Mathematical addition
 * @param n1
 * @param n2
 *
 * Usage:
 *  add(0.1, 0.2) // 0.3
 */
function add(n1, n2) {
    typeError(n1, n2);
    const [n1DecLen, n2DecLen] = [decimalLen(n1), decimalLen(n2)];
    const base = exponent(n1DecLen, n2DecLen);
    return (n1 * base + n2 * base) / base;
}
exports.add = add;
/**
 * Mathematical multiplication
 * @param n1
 * @param n2
 *
 * Usage:
 * multiply(0.3, 0.75) // 0.225
 */
function multiply(n1, n2) {
    typeError(n1, n2);
    const [n1DecLen, n2DecLen] = [decimalLen(n1), decimalLen(n2)];
    const base = exponent(n1DecLen, n2DecLen, 2);
    return (n1 * n2 * base) / base;
}
exports.multiply = multiply;
/**
 * Mathematical subtraction
 * @param n1
 * @param n2
 *
 * Usage:
 * subtract() //
 */
function subtract(n1, n2) {
    typeError(n1, n2);
    const [n1DecLen, n2DecLen] = [decimalLen(n1), decimalLen(n2)];
    const base = exponent(n1DecLen, n2DecLen);
    return (n1 * base - n2 * base) / base;
}
exports.subtract = subtract;
/**
 * Mathematical division
 * @param n1
 * @param n2
 *
 * Usage:
 * divide() //
 */
function divide(n1, n2) {
    typeError(n1, n2);
    const [n1DecLen, n2DecLen] = [decimalLen(n1), decimalLen(n2)];
    const r1 = Number(n1.toString().replace(".", ""));
    const r2 = Number(n2.toString().replace(".", ""));
    return (r1 / r2) * Math.pow(10, n2DecLen - n1DecLen);
}
exports.divide = divide;
/**
 * decimals
 * @param n
 *
 * Usage:
 *  decimalLen(1) // 0
 *  decimalLen(0.1) // 1
 *  decimalLen(0.75) // 2
 */
function decimalLen(n) {
    return (n.toString().split('.')[1] || '').length;
}
/**
 * The n power of 10 of the largest number in two numbers n1 n2.
 * @param n1
 * @param n2
 * @param n
 *
 * Usage:
 *  exponent(1, 2, 1) // 2
 *  exponent(1, 2, 2) // 4
 */
function exponent(n1, n2, n = 1) {
    return Math.pow(10, Math.pow(Math.max(n1, n2), n));
}
function isNumber(n) {
    return ({}).toString.call(n) === '[object Number]';
}
function typeError(n1, n2) {
    if (!isNumber(n1) || !isNumber(n2)) {
        throw new Error("EasyMath Error: parameter of type Expected<number>");
    }
}
Number.prototype.add = function (n) {
    return add(n, this);
};
Number.prototype.sub = function (n) {
    return subtract(this, n);
};
Number.prototype.mul = function (n) {
    return multiply(this, n);
};
Number.prototype.div = function (n) {
    return divide(this, n);
};
exports.default = {
    add,
    multiply,
    subtract,
    divide,
};
