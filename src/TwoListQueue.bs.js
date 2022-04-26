// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Belt_List = require("rescript/lib/js/belt_List.js");
var Caml_option = require("rescript/lib/js/caml_option.js");

var empty = {
  front: /* [] */0,
  back: /* [] */0
};

function peek(q) {
  var match = q.front;
  if (match) {
    return Caml_option.some(match.hd);
  }
  
}

function enqueue(q, x) {
  if (q.front) {
    return {
            front: q.front,
            back: {
              hd: x,
              tl: q.back
            }
          };
  } else {
    return {
            front: {
              hd: x,
              tl: /* [] */0
            },
            back: /* [] */0
          };
  }
}

function dequeue(q) {
  var match = q.front;
  if (!match) {
    return ;
  }
  var t = match.tl;
  if (t && !t.hd && !t.tl) {
    return {
            front: Belt_List.reverse(q.back),
            back: /* [] */0
          };
  }
  return {
          front: t,
          back: q.back
        };
}

var q = enqueue(enqueue(enqueue(empty, 1), 2), 3);

console.log(q);

exports.empty = empty;
exports.peek = peek;
exports.enqueue = enqueue;
exports.dequeue = dequeue;
exports.q = q;
/* q Not a pure module */
