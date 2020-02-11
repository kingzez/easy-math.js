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
export const decimalLen = (n: number): number =>
    (n.toString().split(".")[1] || "").length;

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
export const exponent = (n1: number, n2: number, n: number = 1): number =>
    Math.pow(10, Math.pow(Math.max(n1, n2), n));

export const isNumber = (n: number): boolean =>
    ({}.toString.call(n) === "[object Number]");

export const typeError = (n1: any, n2: any): void => {
    if (!isNumber(n1) || !isNumber(n2)) {
        throw new Error("EasyMath Error: parameter of type Expected<number>");
    }
};
