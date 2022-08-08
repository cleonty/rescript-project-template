module type Map = {
  /* [('k, 'v) t] is the type of maps that bind keys of type
   ['k] to values of type ['v]. */
  type t<'k, 'v>

  /* [insert k v m] is the same map as [m], but with an additional
      binding from [k] to [v].  If [k] was already bound in [m],
      that binding is replaced by the binding to [v] in the new map. */
  let insert: (t<'k, 'v>, 'k, 'v) => t<'k, 'v>

  /* [find k m] is [Some v] if [k] is bound to [v] in [m],
   and [None] if not. */
  let find: (t<'k, 'v>, 'k) => option<'v>

  /* [remove k m] is the same map as [m], but without any binding of [k].
   If [k] was not bound in [m], then the map is unchanged. */
  let remove: (t<'k, 'v>, 'k) => t<'k, 'v>

  /* [empty] is the empty map. */
  let empty: t<'k, 'v>

  /* [of_list lst] is a map containing the same bindings as
      association list [lst].
      Requires: [lst] does not contain any duplicate keys. */
  let of_list: list<('k, 'v)> => t<'k, 'v>

  /* [bindings m] is an association list containing the same
   bindings as [m]. There are no duplicates in the list. */
  let bindings: t<'k, 'v> => list<('k, 'v)>
}
