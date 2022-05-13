module IntCmp = Belt.Id.MakeComparable({
  type t = int
  let cmp = (a, b) => Pervasives.compare(a, b)
})

let m0 = Belt.Map.make(~id=module(IntCmp))
let m1 = Belt.Map.set(m0, 0, "a")
let m2 = Belt.Map.set(m1, 1, "b")
Js.log(Belt.Map.toArray(m2))

type name = {first: string, last: string}

module NameCmp = Belt.Id.MakeComparable({
  type t = name
  let cmp = (a, b) => {
    switch Pervasives.compare(a.last, b.last) {
    | 0 => Pervasives.compare(a.first, b.first)
    | c => c
    }
  }
})

let k1 = {last: "Kardashian", first: "Kourtney"}
let k2 = {last: "Kardashian", first: "Kimberly"}
let k3 = {last: "Kardashian", first: "Khloe"}
let k4 = {last: "West", first: "Kanye"}

let nameMap = Belt.Map.fromArray(
  [(k1, 1979), (k2, 1980), (k3, 1940), (k4, 1888)],
  ~id=module(NameCmp),
)
Js.log(Belt.Map.toArray(nameMap))
