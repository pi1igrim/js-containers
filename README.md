# js-containers
Provides additional containers such as Stack, Queue, LinkedList, etc.

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/pi1igrim/js-containers/blob/main/LICENSE)

## Description

This package provides additional containers such as Stack, Queue, LinkedList, etc.

## Motivation

JavaScript out of the box supports the following data structures: Array, Set, Map and their weak analogues. They really achieved perfection.

But sometimes programmers want to express their ideas more clearly by using certain data structures. We make it easier.

## Installation

``` bash
$ npm i js-containers
```

## API

* [each collection](#each-collection)
  - [clear](#clear)
  - [load](#user-content-load)
  - [has](#user-content-has)
  - [[Symbol.iterator]](#user-content-symbol-iterator)
  - [toArray](#user-content-to-array)
  - [count](#user-content-count)

* [Stack](#user-content-class-stack)
  - [common functionality](#each-collection)
  - [constructor](#stack-constructor)
  - [push](#stack-push)
  - [pop](#stack-pop)

* [Queue](#queue)
  - [common functionality](#each-collection)
  - [constructor](#stack-constructor)
  - [equeue](#queue-enqueue)
  - [dequeue](#queue-dequeue)

* [LinkedList](#linked-list)
  - [common functionality](#each-collection)
  - [constructor](#stack-constructor)
  - [equeue](#linked-list-enqueue)
  - [dequeue](#linked-list--dequeue)

### each collection

#### clear
Remove all data
_Returns:_ This collection
[`<Array>`][array] tuple with two parts of the array

#### load
Add values from iterabled object to the collection
- `iterabled`: `any` object which can be iterable
_Returns:_ [`<Array>`][array] tuple with two parts of the array

#### has
Check existing the value in the collection
- `value`: `any` value which we can check

_Returns:_ `true` or `false`

#### [[Symbol.iterator]]
Functionality which is getting iterabling
_Returns:_ [`<Array>`][array] tuple with two parts of the array

#### toArray()
Export data to an array
_Returns:_ [`<Array>`][array] tuple with two parts of the array

#### count
Return number of values
_Returns:_ [`<Array>`][array] tuple with two parts of the array

- `login`: [`<string>`][string] login to test
- `password`: [`<string>`][string] password to test
- `required`: [`<Array>`][array] required tests configs
- `optional`: [`<Array>`][array] optional tests configs, default: `[]`

](#collection-clear)
- `index`: [`<number>`][number] index defining end of first part and start of
  second
- `array`: [`<Array>`][array] to be split


Split array into two parts

### Stack(index, array)

- `index`: [`<number>`][number] index defining end of first part and start of
  second
- `array`: [`<Array>`][array] to be split

_Returns:_ [`<Array>`][array] tuple with two parts of the array

Split array into two parts

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

* v1.0.0: Implemented Stack, Queue, LinkedList.

## TODO

* Hash table
* Other data structures

## License

[MIT](https://github.com/pi1igrim/terminal-string/blob/main/LICENSE)
