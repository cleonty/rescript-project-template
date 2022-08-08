module type Monad = {
  type t<'a>
  let return : 'a => t<'a>
  let bind : (t<'a>, 'a => t<'b>) => t<'b>
}

let plus_opt = (x:option<int>, y:option<int>) : option<int> => {
  switch (x, y) {
    | (None, _) | (_, None) => None
    | (Some( a), Some( b)) => Some (a + b)
  }
}

let minus_opt = (x:option<int>, y:option<int>) : option<int> => {
  switch (x, y) {
    | (None, _) | (_, None) => None
    | (Some( a), Some( b)) => Some (a - b)
  }
}

let mult_opt = (x:option<int>, y:option<int>) : option<int> => {
  switch (x, y) {
    | (None, _) | (_, None) => None
    | (Some( a), Some( b)) => Some (a * b)
  }
}

let div_opt = (x:option<int>, y:option<int>) : option<int> => {
  switch (x, y) {
    | (None, _) | (_, None) => None
    | (Some( a), Some( b)) => if (b == 0) { None } else {Some (a * b)}
  }
}

let propagate_none = (op : (int, int) => option<int>, x : option<int>, y: option<int>) =>
  switch (x, y) {
  | (None, _) | (_, None) => None
  | (Some (a), Some (b)) => op (a, b)
  }


module Maybe : Monad = {
  type t<'a> = option<'a>

  let return = x => Some(x)

  let bind = (m, f) =>
    switch m {
    | None => None
    | Some(x) => f(x)
    }
}

let plus = propagate_none((x, y) => Some(x + y))
let minus = propagate_none((x, y) => Some(x - y))
let mul = propagate_none((x, y) => Some(x * y))

let div_wrap = (x: int, y: int) => {
  if y == 0 {
    None
  } else {
    Some (x / y)
  }
}

let div = propagate_none(div_wrap)

  let bind = (x: option<int>, op: int => option<int>) =>
    switch x {
    | None => None
    | Some(a) => op(a)
    }

let upgrade : (int => option<int>) => (option<int> => option<int>) =
   (op : int => option<int>, x : option<int>) => bind(x, op)
