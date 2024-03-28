'use strict';

const { notImplemented } = require('./common');

class Collection {
  get count() {
    return notImplemented();
  }

  validateIsNotEmpty() {
    if (this.count === 0) {
      throw new Error('Is empty');
    }
  }
}
module.exports = Collection;
