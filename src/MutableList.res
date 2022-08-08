type rec node<'a> = {
  value: 'a,
  mutable next: option<node<'a>>,
}

type mlist<'a> = {mutable first: option<node<'a>>}

let create_node = v => {
  value: v,
  next: None,
}

let singleton = v => {
  first: Some(create_node(v)),
}

let s = singleton(3110)

let insert_first = (lst, v) =>
  switch lst.first {
  | None => lst.first = Some(create_node(v))
  | was_first => {
      let new_first = create_node(v)
      new_first.next = was_first
      lst.first = Some(new_first)
    }
  }

let _ = insert_first(s, 55)

let empty = () => {
  first: None
}

Js.log(s)