'use strict';

const Collection = require('./collection');
const {
  EMPTY,
  exist,
  validateIterability,
} = require('./common');

class Stack extends Collection {
  #store;
  #end;
  constructor(iterable) {
    super();
    this.clear();
    if (exist(iterable)) this.load(iterable);
  }

  clear() {
    this.#store = {};
    this.#end = EMPTY;
    return this;
  }

  load(iterable) {
    validateIterability(iterable);
    for (const value of iterable) {
      this.push(value);
    }
    return this;
  }

  push(value) {
    this.#store[++this.#end] = value;
    return this;
  }

  pop() {
    this.validateIsNotEmpty();
    const result = this.#store[this.#end];
    delete this.#store[this.#end--];
    return result;
  }

  has(value) {
    for (const current of this) {
      if (current === value) {
        return true;
      }
    }
    return false;
  }

  [Symbol.iterator]() {
    return createIterator(this.#store, this.#end);
  }

  toArray() {
    return [...this];
  }

  get count() {
    return this.#end + 1;
  }
}

function createIterator(store, end) {
  return {
    next() {
      return isDone() ?
        { done: true } :
        { done: false, value: store[end--] };
    },
  };

  function isDone() {
    return end <= EMPTY;
  }
}

module.exports = Stack;
