// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


function empty(param) {
  return {
          contents: undefined
        };
}

function insert_first(lst, v) {
  lst.contents = {
    next: {
      contents: lst.contents
    },
    value: v
  };
  
}

function to_list(lst) {
  var match = lst.contents;
  if (match !== undefined) {
    return {
            hd: match.value,
            tl: to_list(match.next)
          };
  } else {
    return /* [] */0;
  }
}

var lst0 = {
  contents: undefined
};

insert_first(lst0, 1);

var l = to_list(lst0);

var lst1 = lst0;

exports.empty = empty;
exports.insert_first = insert_first;
exports.to_list = to_list;
exports.lst0 = lst0;
exports.lst1 = lst1;
exports.l = l;
/*  Not a pure module */