type pointer<'a> = option<ref<'a>>
let null: pointer<'a> = None

let malloc = (x: 'a): pointer<'a> => Some(ref(x))
let p = malloc(42)

exception Segfault

let deref = (ptr: pointer<'a>): 'a =>
  switch ptr {
  | None => raise(Segfault)
  | Some(r) => r.contents
  }

let assign = (ptr: pointer<'a>, x: 'a) =>
  switch ptr {
  | None => raise(Segfault)
  | Some(r) => r := x
  }

Js.log(deref(p))
assign(p, 2)
Js.log(deref(p))
//Js.log(deref(null))
