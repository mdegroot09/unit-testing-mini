// npm init, npm i --save-dev jest

const {greeting, returnTwo, add, subtract, divide, multiply} = require('./functions')

test('returnTwo should return two', () => {
  expect(returnTwo()).toEqual(2)
})

test('greeting should return a dynamic greeting based on the name', () => {
  expect(greeting('Mike')).toEqual('Hello, Mike.')
  expect(greeting('Trisha')).toEqual('Hello, Trisha.')
})

describe('Math functions', () => {
  test('add should add two number values and return the sum', () => {
    expect(add(2,3)).toEqual(5)
    expect(add(6,3)).toEqual(9)
  })
  
  test('add should subtract one number from another and return the difference', () => {
    expect(add(2,3)).toEqual(5)
    expect(add(6,3)).toEqual(9)
  })
  
  test('add should divide one number from another and return the result', () => {
    expect(add(2,3)).toEqual(5)
    expect(add(6,3)).toEqual(9)
  })
  
  test('add should multiply two numbers and return the product', () => {
    expect(add(2,3)).toEqual(5)
    expect(add(6,3)).toEqual(9)
  })
})


// npm run test