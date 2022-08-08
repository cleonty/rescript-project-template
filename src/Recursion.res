let fact0 = ref(x => x + 0)
let fact = n => if n == 0 {1} else {n * fact0.contents(n-1)}
fact0.contents = fact

Js.log(fact(5)) 