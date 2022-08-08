module type MutableStack = {
  /* ['a t] is the type of mutable stacks whose elements have type ['a].
      The stack is mutable not in the sense that its elements can
      be changed, but in the sense that it is not persistent:
      the operations [push] and [pop] destructively modify the stack. */
  type t<'a>

  /* Raised if [peek] or [pop] encounter the empty stack. */
  exception Empty

  /* [empty ()] is the empty stack */
  let empty: unit => t<'a>

  /* [push x s] modifies [s] to make [x] its top element.
   The rest of the elements are unchanged. */
  let push: (t<'a>, 'a) => unit

  /* [peek s] is the top element of [s].
   Raises: [Empty] is [s] is empty. */
  let peek: t<'a> => 'a

  /* [pop s] removes the top element of [s].
   Raises: [Empty] is [s] is empty. */
  let pop: t<'a> => unit
}

module MutableRecordStack: MutableStack = {
  /* An ['a node] is a node of a mutable linked list.  It has
     a field [value] that contains the node's value, and
     a mutable field [next] that is [None] if the node has
     no successor, or [Some n] if the successor is [n]. */
  type rec node<'a> = {value: 'a, mutable next: option<node<'a>>}

  /* AF: An ['a t] is a stack represented by a mutable linked list.
     The mutable field [top] is the first node of the list,
     which is the top of the stack. The empty stack is represented
     by {top = None}.  The node {top = Some n} represents the
     stack whose top is [n], and whose remaining elements are
     the successors of [n]. */
  type t<'a> = {mutable top: option<node<'a>>}

  exception Empty

  let empty = () => {top: None}

  let push = (s, x) => s.top = Some({value: x, next: s.top})

  let peek = s =>
    switch s.top {
    | None => raise(Empty)
    | Some({value}) => value
    }

  let pop = s =>
    switch s.top {
    | None => raise(Empty)
    | Some({next}) => s.top = next
    }
}
open MutableRecordStack
let s = empty()
s->push(1)
s->push(2)

Js.log(s)
