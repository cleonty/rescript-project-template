// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml = require("rescript/lib/js/caml.js");
var Belt_Id = require("rescript/lib/js/belt_Id.js");
var Belt_Map = require("rescript/lib/js/belt_Map.js");

function int_of_day(d) {
  return d + 1 | 0;
}

function cmp(a, b) {
  return Caml.caml_int_compare(a + 1 | 0, b + 1 | 0);
}

var DayCmp = Belt_Id.MakeComparable({
      cmp: cmp
    });

var m = Belt_Map.set(Belt_Map.set(Belt_Map.make(DayCmp), /* Mon */0, "Monday"), /* Tue */1, "Tusday");

var arr = Belt_Map.toArray(m);

console.log(arr);

exports.int_of_day = int_of_day;
exports.DayCmp = DayCmp;
exports.m = m;
exports.arr = arr;
/* DayCmp Not a pure module */
