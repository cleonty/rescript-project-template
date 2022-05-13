// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var List = require("rescript/lib/js/list.js");
var Caml_obj = require("rescript/lib/js/caml_obj.js");

function SetOfList(S) {
  var of_list = function (lst) {
    return List.fold_right(S.add, lst, S.empty);
  };
  return {
          of_list: of_list
        };
}

function elements(s) {
  return List.sort_uniq(Caml_obj.caml_compare, s);
}

var ListSet = {
  empty: /* [] */0,
  mem: List.mem,
  add: List.cons,
  elements: elements
};

function add(x, s) {
  if (List.mem(x, s)) {
    return s;
  } else {
    return {
            hd: x,
            tl: s
          };
  }
}

function elements$1(x) {
  return x;
}

var UniqListSet = {
  empty: /* [] */0,
  mem: List.mem,
  add: add,
  elements: elements$1
};

function of_list(lst) {
  return List.fold_right(List.cons, lst, /* [] */0);
}

var OfList = {
  of_list: of_list
};

function of_list$1(lst) {
  return List.fold_right(add, lst, /* [] */0);
}

var UniqOfList = {
  of_list: of_list$1
};

exports.SetOfList = SetOfList;
exports.ListSet = ListSet;
exports.UniqListSet = UniqListSet;
exports.OfList = OfList;
exports.UniqOfList = UniqOfList;
/* No side effect */
