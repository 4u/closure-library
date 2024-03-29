// Copyright 2013 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file frexcept in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Unit tests for goog.labs.userAgent.engine.
 */

goog.provide('goog.labs.userAgent.utilTest');

goog.require('goog.labs.userAgent.testAgents');
goog.require('goog.labs.userAgent.util');
goog.require('goog.testing.jsunit');

goog.setTestOnly('goog.labs.userAgent.utilTest');


/**
 * Tests parsing a few example UA strings.
 */
function testExtractVersionTuples() {
  // Old Android
  var tuples = goog.labs.userAgent.util.extractVersionTuples(
      goog.labs.userAgent.testAgents.ANDROID_BROWSER);

  assertEquals(4, tuples.length);
  assertSameElements(
      ['Mozilla', '5.0',
       'Linux; U; Android 2.3.5; en-us; HTC Vision Build/GRI40'], tuples[0]);
  assertSameElements(['AppleWebKit', '533.1', 'KHTML, like Gecko'], tuples[1]);
  assertSameElements(['Version', '4.0', undefined], tuples[2]);
  assertSameElements(['Mobile Safari', '533.1', undefined], tuples[3]);

  // IE 9
  tuples = goog.labs.userAgent.util.extractVersionTuples(
      goog.labs.userAgent.testAgents.IE_9);
  assertEquals(1, tuples.length);
  assertSameElements(
      ['Mozilla', '5.0',
       'compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0'], tuples[0]);

  // Opera
  tuples = goog.labs.userAgent.util.extractVersionTuples(
      goog.labs.userAgent.testAgents.OPERA_10);
  assertEquals(3, tuples.length);
  assertSameElements(['Opera', '9.80', 'S60; SymbOS; Opera Mobi/447; U; en'],
                     tuples[0]);
  assertSameElements(['Presto', '2.4.18', undefined], tuples[1]);
  assertSameElements(['Version', '10.00', undefined], tuples[2]);
}
