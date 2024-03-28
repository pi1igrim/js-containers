'use strict';

class Node {
  #value;
  constructor(value, next = null) {
    this.#value = value;
    this.next = next;
  }

  get value() {
    return this.#value;
  }

  toString() {
    return this.value.toString();
  }
}

module.exports = Node;
