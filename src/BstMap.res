module type Map = {
  type t<'k, 'v>

  let empty: t<'k, 'v>
  let insert: (t<'k, 'v>, 'k, 'v) => t<'k, 'v>

  let lookup: (t<'k, 'v>, 'k) => 'v

  let bindings : (t<'k,'v>) => array<('k, 'v)>
}

module BstMap: Map = {
  type rec tree<'k, 'v> =
    | Leaf
    | Node({key: 'k, value: 'v, left: tree<'k, 'v>, right: tree<'k, 'v>})
  type t<'k, 'v> = tree<'k, 'v>
  let empty = Leaf
  let rec insert = (t, k, v) => {
    switch t {
    | Leaf => Node({key: k, value: v, left: Leaf, right: Leaf})
    | Node({key, value, left, right}) =>
      if Pervasives.compare(k, key) < 0 {
        Node({key: key, value: value, left: insert(left, k, v), right: right})
      } else {
        Node({key: key, value: value, left: left, right: insert(right, k, v)})
      }
    }
  }

  let rec lookup = (t, k) => {
    switch t {
    | Leaf => failwith("not found")
    | Node({key, value, left, right}) => {
        let cmpRes = Pervasives.compare(k, key)
        switch cmpRes {
        | 0 => value
        | c if c < 0 => lookup(left, k)
        | _ => lookup(right, k)
        }
      }
    }
  }
  
  let rec bindings = t => {
    switch t {
      | Leaf => []
      | Node({key, value, left, right}) => {
        [(key, value)]->Js.Array2.concat(bindings(left))->Js.Array2.concat(bindings(right))
      }
    }
  }
}

let m = BstMap.empty->BstMap.insert("hello", "world")->BstMap.insert("a", "b")
Js.log(BstMap.bindings(m))
