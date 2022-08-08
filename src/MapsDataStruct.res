module type Map = {
  /* * [t<'k, 'v>] is the type of maps that bind keys of type
   ['k] to values of type ['v]. */

  type t<'k, 'v>

  /* * [insert k v m] is the same map as [m], but with an additional
      binding from [k] to [v].  If [k] was already bound in [m],
      that binding is replaced by the binding to [v] in the new map. */
  let insert: (t<'k, 'v>, 'k, 'v) => t<'k, 'v>

  /* * [find k m] is [Some v] if [k] is bound to [v] in [m],
   and [None] if not. */
  let find: (t<'k, 'v>, 'k) => option<'v>

  /* * [remove k m] is the same map as [m], but without any binding of [k].
   If [k] was not bound in [m], then the map is unchanged. */
  let remove: (t<'k, 'v>, 'k) => t<'k, 'v>

  /* * [empty] is the empty map. */
  let empty: unit => t<'k, 'v>

  /* * [of_array lst] is a map containing the same bindings as
      association array [lst].
      Requires: [lst] does not contain any duplicate keys. */
  let of_array: array<('k, 'v)> => t<'k, 'v>

  /* * [bindings m] is an association list containing the same
   bindings as [m]. There are no duplicates in the list. */
  let bindings: t<'k, 'v> => array<('k, 'v)>
}

module AssocListMap: Map = {
  /* * AF: [[(k1, v1); (k2, v2); ...; (kn, vn)]] is the map {k1 : v1, k2 : v2,
      ..., kn : vn}. If a key appears more than once in the list, then in the
      map it is bound to the left-most occurrence in the list. For example,
      [[(k, v1); (k, v2)]] represents {k : v1}. The empty list represents
      the empty map.
      RI: none. */
  type t<'k, 'v> = array<('k, 'v)>

  /* O(n) */
  let insert = (m, k, v) => {
    let _ = m->Js.Array2.push((k, v))
    m
  }

  /* O(n) */
  let find = (m: t<'k, 'v>, k: 'k) => {
    let item = m->Js.Array2.find(((k', _)) => k == k')
    switch item {
    | Some((_, v)) => Some(v)
    | None => None
    }
  }

  /* O(n) */
  let remove = (m, k) => m->Js.Array2.filter(((k', _)) => k == k')

  let empty = () => []

  /* * Efficiency: O(1) */
  let of_array = lst => lst

  /* * [keys m] is a list of the keys in [m], without
      any duplicates.
      Efficiency: O(n log n). */
  let keys = m =>
    m
    ->Js.Array2.map(((k, _)) => k)
    ->Js.Array2.sortInPlaceWith(Pervasives.compare)

  let binding = (m: t<'k, 'v>, k: 'k) => {
    (
      k,
      switch m->Js.Array2.find(((k', _)) => k == k') {
      | Some((_, v)) => v
      | None => failwith("empty")
      },
    )
  }

  let bindings = (m: t<'k, 'v>) => Js.Array2.map(keys(m), k => binding(m, k))
}

open AssocListMap

let m = empty()
let m1 = insert(m, 1, 2)
let m2 = insert(m, 3, 4)
Js.log(m2)
