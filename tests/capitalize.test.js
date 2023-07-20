import { strict as assert } from 'node:assert';
import { capitalize } from '../src/capitalize.js';

// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает неверно!');
// }

// if (capitalize('123') !== '123') {
//   throw new Error('Функция работает неверно!');
// }

// if (capitalize(''), '') {
//   throw new Error('Функция работает неверно!');
// }

assert.equal(capitalize('hello'), 'Hello');
assert.equal(capitalize('123'), '123');
assert.equal(capitalize(''), '');

console.log('Все тесты пройдены!');
