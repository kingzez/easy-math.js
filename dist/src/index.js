"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
/**
 * addition
 * 加法
 * @param n1
 * @param n2
 *
 * Usage:
 *  add(0.1, 0.2) // 0.3
 */
function add(n1, n2) {
    util_1.typeError(n1, n2);
    const [n1DecLen, n2DecLen] = [util_1.decimalLen(n1), util_1.decimalLen(n2)];
    const base = util_1.exponent(n1DecLen, n2DecLen);
    return (n1 * base + n2 * base) / base;
}
exports.add = add;
/**
 * multiplication
 * 乘法
 * @param n1
 * @param n2
 *
 * Usage:
 * multiply(0.3, 0.75) // 0.225
 */
function multiply(n1, n2) {
    util_1.typeError(n1, n2);
    const [n1DecLen, n2DecLen] = [util_1.decimalLen(n1), util_1.decimalLen(n2)];
    const base = util_1.exponent(n1DecLen, n2DecLen, 2);
    return (n1 * n2 * base) / base;
}
exports.multiply = multiply;
/**
 * subtraction
 * 减法
 * @param n1
 * @param n2
 *
 * Usage:
 * subtract() //
 */
function subtract(n1, n2) {
    util_1.typeError(n1, n2);
    const [n1DecLen, n2DecLen] = [util_1.decimalLen(n1), util_1.decimalLen(n2)];
    const base = util_1.exponent(n1DecLen, n2DecLen);
    return (n1 * base - n2 * base) / base;
}
exports.subtract = subtract;
/**
 * division
 * 除法
 * @param n1
 * @param n2
 *
 * Usage:
 * divide() //
 */
function divide(n1, n2) {
    util_1.typeError(n1, n2);
    const [n1DecLen, n2DecLen] = [util_1.decimalLen(n1), util_1.decimalLen(n2)];
    const r1 = Number(n1.toString().replace(".", ""));
    const r2 = Number(n2.toString().replace(".", ""));
    return (r1 / r2) * Math.pow(10, n2DecLen - n1DecLen);
}
exports.divide = divide;
exports.default = {
    add,
    multiply,
    subtract,
    divide
};
