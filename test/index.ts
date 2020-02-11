import test from 'ava'
import  { add, multiply, subtract, divide } from '../src'

test('add', (t) => {
    const result = add(0.1, 0.2)
    console.log(`0.1 + 0.2 = ${result}`)
    t.is(result, 0.3)
})

test('multiply', (t) => {
    const result = multiply(0.3, 0.75)
    console.log(`0.3 * 0.75 = ${result}`)
    t.is(result, 0.225)
})

test('subtract', (t) => {
    const result = subtract(1.5, 1.2)
    console.log(`1.5 - 1.2 = ${result}`)
    t.is(result, 0.3)
})

test('divide', (t) => {
    const result = divide(0.3, 0.1)
    console.log(`0.3 / 0.1 = ${result}`)
    t.is(result, 3)
})
