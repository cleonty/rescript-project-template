let rec fib = n =>
  if n < 2 {
    1
  } else {
    fib(n - 1) + fib(n - 2)
  }

let fibm = n => {
  let memo: array<option<int>> = Belt.Array.make(n + 1, None)
  let rec f_mem = n => {
    switch memo[n] {
    | Some(result) => result
    | None => {
        let result = if n < 2 {
          1
        } else {
          f_mem(n - 1) + f_mem(n - 2)
        }
        memo[n] = Some(result)
        result
      }
    }
  }
  f_mem(n)
}
  
let memo_rec = f => {
  let h =  Belt.HashMap.Int.make(~hintSize=16)
  let rec g =  x =>
    switch Belt.HashMap.Int.get(h, x) {
      | None => {
        let y = f(g(x))
        Belt.HashMap.Int.set(h, x, y)
        y
      }
      | Some(y) => y
    }
    g
}


let fib_memo = n => {
  let fib = (self,  n) =>
    if n < 2 { 1 } else { self (n - 1) + self (n - 2) }
  memo_rec(fib)(n)
}