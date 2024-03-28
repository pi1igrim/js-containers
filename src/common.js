'use strict';

const EMPTY = -1;
module.exports.EMPTY = EMPTY;

function notImplemented() {
  throw new Error('Not implemented');
}
module.exports.notImplemented = notImplemented;

function exist(value) {
  return !!value;
}
module.exports.exist = exist;

function validateIterability(value) {
  if (!value || typeof value[Symbol.iterator] !== 'function') {
    throw new Error('Argument is not iterable');
  }
}
module.exports.validateIterability = validateIterability;

function validateIsNotEmpty(collection) {
  if (!collection.count) {
    throw new Error('Is empty');
  }
}
module.exports.validateIsNotEmpty = validateIsNotEmpty;
