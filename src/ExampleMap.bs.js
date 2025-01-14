// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml = require("rescript/lib/js/caml.js");
var Belt_Id = require("rescript/lib/js/belt_Id.js");
var Belt_Map = require("rescript/lib/js/belt_Map.js");
var Caml_obj = require("rescript/lib/js/caml_obj.js");

var cmp = Caml_obj.caml_compare;

var IntCmp = Belt_Id.MakeComparable({
      cmp: cmp
    });

var m0 = Belt_Map.make(IntCmp);

var m1 = Belt_Map.set(m0, 0, "a");

var m2 = Belt_Map.set(m1, 1, "b");

console.log(Belt_Map.toArray(m2));

function cmp$1(a, b) {
  var c = Caml.caml_string_compare(a.last, b.last);
  if (c !== 0) {
    return c;
  } else {
    return Caml.caml_string_compare(a.first, b.first);
  }
}

var NameCmp = Belt_Id.MakeComparable({
      cmp: cmp$1
    });

var k1 = {
  first: "Kourtney",
  last: "Kardashian"
};

var k2 = {
  first: "Kimberly",
  last: "Kardashian"
};

var k3 = {
  first: "Khloe",
  last: "Kardashian"
};

var k4 = {
  first: "Kanye",
  last: "West"
};

var nameMap = Belt_Map.fromArray([
      [
        k1,
        1979
      ],
      [
        k2,
        1980
      ],
      [
        k3,
        1940
      ],
      [
        k4,
        1888
      ]
    ], NameCmp);

console.log(Belt_Map.toArray(nameMap));

exports.IntCmp = IntCmp;
exports.m0 = m0;
exports.m1 = m1;
exports.m2 = m2;
exports.NameCmp = NameCmp;
exports.k1 = k1;
exports.k2 = k2;
exports.k3 = k3;
exports.k4 = k4;
exports.nameMap = nameMap;
/* IntCmp Not a pure module */
