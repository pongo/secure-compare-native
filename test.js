"use strict";

const assert = require("assert");
const blns = require("blns");
const { secureCompare, secureCompareBuffer } = require("./index");

const strings = [
  "",
  "a",
  "ab",
  "AB",
  "abc",
  "hello world",
  "你好世界",
  "你好，世界",
  "สวัสดีชาวโลก",
  "\u00e8",
  "\u01e8",
  "47b604fe6993fdb942917db92ae836eba179b69dc5b5ea2a983caf5bac1119f6",
  "hello\r\nworld",
];

describe("secureCompare()", () => {
  it("should return true if the strings are identical", () => {
    strings.forEach((str) => assert.ok(secureCompare(str, str), `"${str}"`));
    blns.forEach((str) => assert.ok(secureCompare(str, str), `"${str}"`));
  });

  it("should return false if the strings are different", () => {
    assert.ok(!secureCompare("ABC", "abc"));
    assert.ok(!secureCompare("abc", "ab"));
    assert.ok(!secureCompare("abc", "abd"));
    assert.ok(!secureCompare("", "abc"));
    assert.ok(!secureCompare("你好世界", "abc"));
  });
});

describe("secureCompareBuffer()", () => {
  const buff1 = Buffer.from("abc");
  const buff2 = Buffer.from("ABC");

  it("should return true if the buffers are identical", () => {
    strings
      .map((x) => Buffer.from(x))
      .forEach((str) => assert.ok(secureCompareBuffer(str, str), `"${str}"`));
    blns
      .map((x) => Buffer.from(x))
      .forEach((str) => assert.ok(secureCompareBuffer(str, str), `"${str}"`));
    assert.ok(secureCompareBuffer(buff1, buff1));
  });

  it("should return false if the buffers are different", () => {
    assert.ok(!secureCompareBuffer(buff2, buff1));
    assert.ok(!secureCompareBuffer(Buffer.from("abc"), Buffer.from("ab")));
    assert.ok(!secureCompareBuffer(Buffer.from("abc"), Buffer.from("abd")));
    assert.ok(!secureCompareBuffer(Buffer.from(""), Buffer.from("abc")));
  });
});
