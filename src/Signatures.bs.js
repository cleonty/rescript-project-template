// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


function fact(n) {
  if (n === 0) {
    return 1;
  } else {
    return Math.imul(n, fact(n - 1 | 0));
  }
}

var RecursiveFact = {
  fact: fact
};

function fact_aux(_n, _acc) {
  while(true) {
    var acc = _acc;
    var n = _n;
    if (n === 0) {
      return acc;
    }
    _acc = Math.imul(n, acc);
    _n = n - 1 | 0;
    continue ;
  };
}

function fact$1(n) {
  return fact_aux(n, 1);
}

var TailRecursiveFact = {
  fact: fact$1
};

var f5_1 = fact(5);

var f5_2 = fact_aux(5, 1);

console.log(f5_1, f5_2);

exports.RecursiveFact = RecursiveFact;
exports.TailRecursiveFact = TailRecursiveFact;
exports.f5_1 = f5_1;
exports.f5_2 = f5_2;
/* f5_1 Not a pure module */
