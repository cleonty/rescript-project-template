// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");

function map(fn, list) {
  if (list) {
    return {
            hd: Curry._1(fn, list.hd),
            tl: map(fn, list.tl)
          };
  } else {
    return /* [] */0;
  }
}

var t1 = map((function (x) {
        return x + 1 | 0;
      }), {
      hd: 1,
      tl: {
        hd: 2,
        tl: {
          hd: 3,
          tl: /* [] */0
        }
      }
    });

console.log(t1);

exports.map = map;
exports.t1 = t1;
/* t1 Not a pure module */