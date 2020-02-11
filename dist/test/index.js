"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const src_1 = require("../src");
ava_1.default('add', (t) => {
    const result = src_1.add(0.1, 0.2);
    console.log(`0.1 + 0.2 = ${result}`);
    t.is(result, 0.3);
});
ava_1.default('multiply', (t) => {
    const result = src_1.multiply(0.3, 0.75);
    console.log(`0.3 * 0.75 = ${result}`);
    t.is(result, 0.225);
});
ava_1.default('subtract', (t) => {
    const result = src_1.subtract(1.5, 1.2);
    console.log(`1.5 - 1.2 = ${result}`);
    t.is(result, 0.3);
});
ava_1.default('divide', (t) => {
    const result = src_1.divide(0.3, 0.1);
    console.log(`0.3 / 0.1 = ${result}`);
    t.is(result, 3);
});
