// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_int32 = require("rescript/lib/js/caml_int32.js");

function plus(x, y) {
  return x + y | 0;
}

function mul(x, y) {
  return Math.imul(x, y);
}

function neg(x) {
  return -x | 0;
}

function to_string(prim) {
  return String(prim);
}

var IntRing = {
  zero: 0,
  one: 1,
  plus: plus,
  mul: mul,
  neg: neg,
  to_string: to_string
};

function plus$1(x, y) {
  return x + y;
}

function mul$1(x, y) {
  return x * y;
}

function neg$1(x) {
  return -x;
}

function to_string$1(prim) {
  return prim.toString();
}

var FloatRing = {
  zero: 0,
  one: 1,
  plus: plus$1,
  mul: mul$1,
  neg: neg$1,
  to_string: to_string$1
};

var div = Caml_int32.div;

var IntField = {
  zero: 0,
  one: 1,
  plus: plus,
  mul: mul,
  neg: neg,
  to_string: to_string,
  div: div
};

function div$1(x, y) {
  return x / y;
}

var FloatField = {
  zero: 0,
  one: 1,
  plus: plus$1,
  mul: mul$1,
  neg: neg$1,
  to_string: to_string$1,
  div: div$1
};

var Ax = IntRing;

var Bx = FloatRing;

exports.IntRing = IntRing;
exports.FloatRing = FloatRing;
exports.Ax = Ax;
exports.Bx = Bx;
exports.IntField = IntField;
exports.FloatField = FloatField;
/* No side effect */
