type rec node<'a> = {
  next: mlist<'a>,
  value: 'a
} and
mlist<'a> = ref<option<node<'a>>>

let empty = (): mlist<'a> => ref(None)

let insert_first = (lst: mlist<'a>, v: 'a): unit =>
    lst := Some({ next: ref(lst.contents), value: v })

let rec to_list = (lst: mlist<'a>): list<'a> =>
  switch(lst.contents) {
    | None => list{}
    | Some ({ next, value }) => list{value, ...to_list(next)}
  } 

let lst0 = empty()
let lst1 = lst0
let _ = insert_first(lst0, 1)
let l = to_list(lst1)