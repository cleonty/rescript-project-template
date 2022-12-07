module Writer = {
  type t<'a> = ('a, string)

  let return = x => (x, "")

  let bind = (m, f) => {
    let (x, s1) = m
    let (y, s2) = f(x)
    (y, s1 ++ s2)
  }
}

let inc = x => x + 1
let dec = x => x - 1

let log = (name: string, f: int => int): (int => (int, string)) => {
  x => (f(x), `Called ${name} on ${Belt.Int.toString(x)}`)
}

let loggable = (name: string, f: int => int): (
  (int, string) => (int, string)
) => {
  (x, s1) => {
    let log_f = log(name, f)
    let (y, s2) = log_f(x)
    (y, s1 ++ s2)
  }
}

let loggable_inc = loggable("inc", inc)
let loggable_dec = loggable("dec", dec)

let make = (x : int) : (int, string) => (x, "")

  let bind = (m, f) => {
    let (x, s1) = m
    let (y, s2) = f(x)
    (y, s1 ++ s2)
  }
  
// let compose = (f, g, x) =>
//   x' => bind(f(x'), y => g(y))

