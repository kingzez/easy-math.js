import { decimalLen, exponent, typeError } from "./util";
/**
 * addition
 * 加法
 * @param n1
 * @param n2
 *
 * Usage:
 *  add(0.1, 0.2) // 0.3
 */
export function add(n1: number, n2: number): number {
    typeError(n1, n2);
    const [n1DecLen, n2DecLen] = [decimalLen(n1), decimalLen(n2)];
    const base = exponent(n1DecLen, n2DecLen);
    return (n1 * base + n2 * base) / base;
}

/**
 * multiplication
 * 乘法
 * @param n1
 * @param n2
 *
 * Usage:
 * multiply(0.3, 0.75) // 0.225
 */
export function multiply(n1: number, n2: number): number {
    typeError(n1, n2);
    const [n1DecLen, n2DecLen] = [decimalLen(n1), decimalLen(n2)];
    const base = exponent(n1DecLen, n2DecLen, 2);
    return (n1 * n2 * base) / base;
}

/**
 * subtraction
 * 减法
 * @param n1
 * @param n2
 *
 * Usage:
 * subtract() //
 */
export function subtract(n1: number, n2: number): number {
    typeError(n1, n2);
    const [n1DecLen, n2DecLen] = [decimalLen(n1), decimalLen(n2)];
    const base = exponent(n1DecLen, n2DecLen);
    return (n1 * base - n2 * base) / base;
}

/**
 * division
 * 除法
 * @param n1
 * @param n2
 *
 * Usage:
 * divide() //
 */
export function divide(n1: number, n2: number): number {
    typeError(n1, n2);
    const [n1DecLen, n2DecLen] = [decimalLen(n1), decimalLen(n2)];
    const r1 = Number(n1.toString().replace(".", ""));
    const r2 = Number(n2.toString().replace(".", ""));
    return (r1 / r2) * Math.pow(10, n2DecLen - n1DecLen);
}

export default {
    add,
    multiply,
    subtract,
    divide
};
