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

assert.strictEqual('hello', 'hello'); // ок
// strictEqual(actual, expected) проверяет равенство по ссылке
// То есть два разных объекта, имеющих одинаковое содержание,
// рассматриваются, как не эквивалентные:
assert.strictEqual({}, {});     // ошибка
assert.deepStrictEqual({}, {}); // ок

// deepStrictEqual(params) можно вызывать как deepEqual(params)
assert.deepStrictEqual({ key: 'value' }, { key: 'value' });   // ок
assert.deepEqual({ key: 'value' }, { key: 'value' });         // ок
assert.deepEqual({ key: 'value' }, { key: 'another value' }); // ошибка

assert.notStrictEqual('hello', 'world');         // ок
assert.notDeepStrictEqual({ a: 1 }, { a: '1' }); // ок

console.log('Все тесты пройдены!');
