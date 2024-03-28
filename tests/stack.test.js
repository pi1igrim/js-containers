'use strict';

const Stack = require('../src/stack');

describe('Stack', () => {
  test('creating', () => {
    const stack = new Stack();
    expect(stack.count).toBe(0);
  });

  test('push', () => {
    const stack = new Stack();
    stack.push(0);
    expect(stack.count).toBe(1);
  });

  test('push several values', () => {
    const stack = new Stack();
    stack.push(1).push(2);
    expect(stack.count).toBe(2);
    expect(stack.toArray()).toEqual([2, 1]);
  });

  test('pop', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.pop()).toBe(1);
    expect(stack.count).toBe(0);
  });

  test('pop several values', () => {
    const stack = new Stack([1, 2]);
    const result = [stack.pop(), stack.pop()];
    expect(result).toEqual([2, 1]);
    expect(stack.count).toBe(0);
  });

  test('pop from empty stack', () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow('Is empty');
  });

  test('clear', () => {
    const stack = new Stack();
    stack.push(1);
    stack.clear();
    expect(stack.count).toBe(0);
  });

  test('fill', () => {
    const stack = new Stack([1]);
    stack.load([2, 3]);
    expect(stack.toArray()).toEqual([3, 2, 1]);
    expect(stack.count).toBe(3);
  });

  test('for of', () => {
    const stack = new Stack([1, 2, 3]);
    const result = [...stack];
    expect(result).toEqual([3, 2, 1]);
  });

  test('has', () => {
    const stack = new Stack();
    stack.push(0);
    expect(stack.has(0)).toBeTruthy();
  });

  test('to array', () => {
    const stack = new Stack([1, 2, 3]);
    const result = stack.toArray();
    expect(result).toEqual([3, 2, 1]);
  });
});
