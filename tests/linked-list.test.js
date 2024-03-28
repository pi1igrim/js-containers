'use strict';

const LinkedList = require('../src/linked-list');

describe('LinkedList', () => {
  test('creating', () => {
    const collection = new LinkedList();
    expect(collection.count).toBe(0);
  });

  test('enqueue', () => {
    const collection = new LinkedList();
    collection.enqueue(1);
    expect(collection.count).toBe(1);
  });

  test('dequeue from empty collection', () => {
    const collection = new LinkedList();
    expect(() => collection.dequeue()).toThrow('Is empty');
  });

  test('dequeue existing value', () => {
    const collection = new LinkedList();
    collection.enqueue(1).enqueue(2);
    expect(collection.count).toBe(2);
    const result = [collection.dequeue(), collection.dequeue()];
    expect(result).toEqual([1, 2]);
    expect(collection.count).toBe(0);
  });

  test('load', () => {
    const collection = new LinkedList();
    collection.load([1, 2]);
    expect(collection.count).toBe(2);
    const result = [collection.dequeue(), collection.dequeue()];
    expect(result).toEqual([1, 2]);
    expect(collection.count).toBe(0);
  });

  test('create with loading', () => {
    const collection = new LinkedList([1, 2]);
    expect(collection.count).toBe(2);
    const result = [collection.dequeue(), collection.dequeue()];
    expect(result).toEqual([1, 2]);
  });

  test('clear empty collection', () => {
    const collection = new LinkedList();
    collection.clear();
    expect(collection.count).toBe(0);
  });

  test('clear', () => {
    const collection = new LinkedList([1, 2]);
    collection.clear();
    expect(collection.count).toBe(0);
  });

  test('for of', () => {
    const collection = new LinkedList([1, 2, 3]);
    expect([...collection]).toEqual([1, 2, 3]);
  });

  test('has', () => {
    const collection = new LinkedList([1, 2]);
    expect(collection.has(0)).toBeFalsy();
    expect(collection.has(1)).toBeTruthy();
  });

  test('to array', () => {
    const collection = new LinkedList([1, 2]);
    expect(collection.toArray()).toEqual([1, 2]);
  });
});
