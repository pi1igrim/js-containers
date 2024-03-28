'use strict';

const Collection = require('./collection');
const Node = require('./node');
const {
  exist,
  validateIterability,
} = require('./common');

class LinkedList extends Collection {
  #start;
  #end;
  #count;
  constructor(iterable) {
    super();
    this.clear();
    if (exist(iterable)) this.load(iterable);
  }

  clear() {
    this.#start = this.#end = null;
    this.#count = 0;
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
    const node = new Node(value);
    if (this.count === 0) {
      this.#start = this.#end = node;
    }
    if (this.#end) this.#end.next = node;
    this.#end = node;
    this.#count++;
    return this;
  }

  dequeue() {
    this.validateIsNotEmpty();
    const result = this.#start;
    this.#start = this.#start.next;
    this.#count--;
    return result.value;
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
    return createIterator(this.#start);
  }

  toArray() {
    return [...this];
  }

  get count() {
    return this.#count;
  }
}

function createIterator(current) {
  return {
    next() {
      if (isDone()) {
        return { done: true };
      }
      const result = { done: false, value: current.value };
      current = current.next;
      return result;
    },
  };

  function isDone() {
    return current === null;
  }
}

module.exports = LinkedList;
