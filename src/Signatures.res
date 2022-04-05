module type Fact = {
  let fact: (int) => int
}

module RecursiveFact : Fact = {
  let rec fact = n => if n == 0 { 1 } else { n * fact (n - 1) }
}

module TailRecursiveFact : Fact = {
  let rec fact_aux = (n, acc) => if n == 0 { acc } else { fact_aux (n - 1, n * acc) }
  
  let fact = n => fact_aux(n, 1)
}

let f5_1 = RecursiveFact.fact(5)
let f5_2 = TailRecursiveFact.fact(5)

Js.log2(f5_1, f5_2)