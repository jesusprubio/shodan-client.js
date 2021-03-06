/*
  Copyright Jesús Rubio <jesusprubio@gmail.com>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

const test = require('ava');
const client = require('../../..');

test('should include documented items', t =>
  t.deepEqual(Object.keys(client.streams), [
    'banners',
    'asn',
    'countries',
    'ports',
  ])
);
