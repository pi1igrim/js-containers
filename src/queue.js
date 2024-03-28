'use strict';

const Collection = require('./collection');
const {
  EMPTY,
  exist,
  validateIterability,
} = require('./common');

class Queue extends Collection {
  #store;
  #start;
  #end;
  constructor(iterable) {
    super();
    this.clear();
    if (exist(iterable)) this.load(iterable);
  }

  clear() {
    this.#store = {};
    this.#start = 0;
    this.#end = EMPTY;
    return this;
  }

  load(iterable) {
    validateIterability(iterable);
    for (const value of iterable) {
      this.enqueue(value);
    }
    return this;
  }

  enqueue(value) {
    this.#store[++this.#end] = value;
    return this;
  }

  dequeue() {
    super.validateIsNotEmpty();
    const result = this.#getStartValue();
    delete this.#getStartValue();
    this.#start++;
    return result;
  }

  #getStartValue() {
    return this.#store[this.#start];
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
    return createIterator(this.#store, this.#start, this.#end);
  }

  toArray() {
    return [...this];
  }

  get count() {
    return this.#end - this.#start + 1;
  }
}

function createIterator(store, start, end) {
  return {
    next() {
      return isDone() ?
        { done: true } :
        { done: false, value: store[start++] };
    },
  };

  function isDone() {
    return end - start <= EMPTY;
  }
}

module.exports = Queue;
