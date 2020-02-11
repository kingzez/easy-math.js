"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * decimals
 * 取出小数位数
 * @param n
 *
 * Usage:
 *  decimalLen(1) // 0
 *  decimalLen(0.1) // 1
 *  decimalLen(0.75) // 2
 */
exports.decimalLen = (n) => (n.toString().split(".")[1] || "").length;
/**
 * The n power of 10 of the largest number in two numbers n1 n2.
 * 两个数n1 n2中最大数的10的n次幂。
 * @param n1
 * @param n2
 * @param n
 *
 * Usage:
 *  exponent(1, 2, 1) // 2
 *  exponent(1, 2, 2) // 4
 */
exports.exponent = (n1, n2, n = 1) => Math.pow(10, Math.pow(Math.max(n1, n2), n));
exports.isNumber = (n) => ({}.toString.call(n) === "[object Number]");
exports.typeError = (n1, n2) => {
    if (!exports.isNumber(n1) || !exports.isNumber(n2)) {
        throw new Error("EasyMath Error: parameter of type Expected<number>");
    }
};
