// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Demo = require("../src/Demo.bs.js");
var Tests = require("./Tests.bs.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");

var equals = Caml_obj.caml_equal;

function randomTests(loc) {
  [
      1,
      5,
      6,
      9
    ].forEach(function (num) {
        return Tests.run(loc, Demo.add(num, num), equals, (num << 1));
      });
  
}

Tests.run([
      [
        "DemoTest.re",
        15,
        13,
        43
      ],
      "Adding 2 numbers should work"
    ], Demo.add(1, 2), equals, 3);

randomTests([
      [
        "DemoTest.re",
        20,
        23,
        62
      ],
      "Adding random numbers should work too"
    ]);

exports.equals = equals;
exports.randomTests = randomTests;
/*  Not a pure module */