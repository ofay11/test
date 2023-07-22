// import reverse from '../src/reverse-str.js';
import { capitalize } from '../src/capitalize.js';

test('capitalize', () => {
  expect(capitalize('hello')).toEqual('Hello');
  expect(capitalize('123')).toEqual('123');
  expect(capitalize('')).toEqual('');
});
