module type Set = {
  type t<'a>
  let empty: t<'a>
  let mem: ('a, t<'a>) => bool
  let add: ('a, t<'a>) => t<'a>
  let elements: t<'a> => list<'a>
}

module SetOfList = (S: Set) => {
  let of_list = lst => List.fold_right(S.add, lst, S.empty)
}

module ListSet : Set = {
  type t<'a> = list<'a>
  let empty = list{}
  let mem = List.mem
  let add = List.cons
  let elements = s => List.sort_uniq(Pervasives.compare, s)
}

module UniqListSet : Set = {
  type t<'a> = list<'a>
  let empty = list{}
  let mem = List.mem
  let add = (x, s) => if mem(x, s) { s } else { list{x, ...s} }
  let elements = x => x
}

module OfList = SetOfList (ListSet)
module UniqOfList = SetOfList (UniqListSet)
