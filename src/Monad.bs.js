// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var Caml_int32 = require("rescript/lib/js/caml_int32.js");
var Caml_option = require("rescript/lib/js/caml_option.js");

function plus_opt(x, y) {
  if (x !== undefined && y !== undefined) {
    return x + y | 0;
  }
  
}

function minus_opt(x, y) {
  if (x !== undefined && y !== undefined) {
    return x - y | 0;
  }
  
}

function mult_opt(x, y) {
  if (x !== undefined && y !== undefined) {
    return Math.imul(x, y);
  }
  
}

function div_opt(x, y) {
  if (x !== undefined && y !== undefined && y !== 0) {
    return Math.imul(x, y);
  }
  
}

function propagate_none(op, x, y) {
  if (x !== undefined && y !== undefined) {
    return Curry._2(op, x, y);
  }
  
}

function $$return(x) {
  return Caml_option.some(x);
}

function bind(m, f) {
  if (m !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(m));
  }
  
}

var Maybe = {
  $$return: $$return,
  bind: bind
};

function plus(param, param$1) {
  return propagate_none((function (x, y) {
                return x + y | 0;
              }), param, param$1);
}

function minus(param, param$1) {
  return propagate_none((function (x, y) {
                return x - y | 0;
              }), param, param$1);
}

function mul(param, param$1) {
  return propagate_none((function (x, y) {
                return Math.imul(x, y);
              }), param, param$1);
}

function div_wrap(x, y) {
  if (y === 0) {
    return ;
  } else {
    return Caml_int32.div(x, y);
  }
}

function div(param, param$1) {
  return propagate_none(div_wrap, param, param$1);
}

function bind$1(x, op) {
  if (x !== undefined) {
    return Curry._1(op, x);
  }
  
}

function upgrade(op, x) {
  return bind$1(x, op);
}

exports.plus_opt = plus_opt;
exports.minus_opt = minus_opt;
exports.mult_opt = mult_opt;
exports.div_opt = div_opt;
exports.propagate_none = propagate_none;
exports.Maybe = Maybe;
exports.plus = plus;
exports.minus = minus;
exports.mul = mul;
exports.div_wrap = div_wrap;
exports.div = div;
exports.bind = bind$1;
exports.upgrade = upgrade;
/* No side effect */
