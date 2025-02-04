// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_exceptions = require("rescript/lib/js/caml_exceptions.js");

var Empty = /* @__PURE__ */Caml_exceptions.create("MutableStack.MutableRecordStack.Empty");

function empty(param) {
  return {
          top: undefined
        };
}

function push(s, x) {
  s.top = {
    value: x,
    next: s.top
  };
  
}

function peek(s) {
  var match = s.top;
  if (match !== undefined) {
    return match.value;
  }
  throw {
        RE_EXN_ID: Empty,
        Error: new Error()
      };
}

function pop(s) {
  var match = s.top;
  if (match !== undefined) {
    var next = match.next;
    s.top = next;
    return ;
  }
  throw {
        RE_EXN_ID: Empty,
        Error: new Error()
      };
}

var MutableRecordStack = {
  Empty: Empty,
  empty: empty,
  push: push,
  peek: peek,
  pop: pop
};

var s = {
  top: undefined
};

push(s, 1);

push(s, 2);

console.log(s);

exports.MutableRecordStack = MutableRecordStack;
exports.s = s;
/*  Not a pure module */
