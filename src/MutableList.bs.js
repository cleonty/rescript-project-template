// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


function create_node(v) {
  return {
          value: v,
          next: undefined
        };
}

function singleton(v) {
  return {
          first: {
            value: v,
            next: undefined
          }
        };
}

var s = {
  first: {
    value: 3110,
    next: undefined
  }
};

function insert_first(lst, v) {
  var was_first = lst.first;
  if (was_first === undefined) {
    lst.first = {
      value: v,
      next: undefined
    };
    return ;
  }
  var new_first = {
    value: v,
    next: undefined
  };
  new_first.next = was_first;
  lst.first = new_first;
  
}

insert_first(s, 55);

function empty(param) {
  return {
          first: undefined
        };
}

console.log(s);

exports.create_node = create_node;
exports.singleton = singleton;
exports.s = s;
exports.insert_first = insert_first;
exports.empty = empty;
/*  Not a pure module */
