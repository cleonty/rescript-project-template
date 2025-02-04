// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var Belt_List = require("rescript/lib/js/belt_List.js");

function fold_left(f, acc, lst) {
  if (lst) {
    return Belt_List.add(fold_left(f, acc, lst.tl), Curry._2(f, acc, lst.hd));
  } else {
    return acc;
  }
}

exports.fold_left = fold_left;
/* No side effect */
