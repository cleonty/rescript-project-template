// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


function size(t) {
  if (t) {
    return (1 + size(t.left) | 0) + size(t.right) | 0;
  } else {
    return 0;
  }
}

var t = /* Node */{
  value: 2,
  left: /* Node */{
    value: 1,
    left: /* Leaf */0,
    right: /* Leaf */0
  },
  right: /* Node */{
    value: 3,
    left: /* Leaf */0,
    right: /* Leaf */0
  }
};

exports.size = size;
exports.t = t;
/* No side effect */