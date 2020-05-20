"use strict";

const crypto = require("crypto");

/**
 * Secure compare two strings
 *
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
function secureCompare(a, b) {
  let other;
  let equalLen;

  if (a.length === b.length) {
    other = b;
    equalLen = true;
  } else {
    other = a;
    equalLen = false;
  }

  return crypto.timingSafeEqual(Buffer.from(a), Buffer.from(other)) && equalLen;
}

/**
 * Secure compare two buffers
 *
 * @param {Buffer} a
 * @param {Buffer} b
 * @return {boolean}
 */
function secureCompareBuffer(a, b) {
  let other;
  let equalLen;

  if (a.length === b.length) {
    other = b;
    equalLen = true;
  } else {
    other = a;
    equalLen = false;
  }

  return crypto.timingSafeEqual(a, other) && equalLen;
}

module.exports.secureCompare = secureCompare;
module.exports.secureCompareBuffer = secureCompareBuffer;
