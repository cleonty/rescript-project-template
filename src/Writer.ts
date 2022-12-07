let inc = (x: number) => x + 1;
let dec = (x: number) => x - 1;

let log = (name: string, f: (arg0: number) => number): ((x: number) => ([number, string])) => 
    (x: number) => ([f(x), `Called ${name} on ${x}`])

let loggable = (name: string, f: (arg0: number) => number): ((a: [number, string]) => [number, string]) => 
    (a: [number, string]) => {
        let [x, s1] = a;
        let log_f = log(name, f);
        let [y, s2] = log_f(x);
        return [y, s1 + ', ' + s2] as [number, string];
    }



let loggable_inc = loggable('inc', inc);
let loggable_dec = loggable('dec', dec);
let make = (x: number): [number, string] => [x, '']
let bind = (m : [number, string], f : (arg0: number) => [number, string]) : [number, string] => {
  let [x, s1] = m;
  let [y, s2] = f(x);
  return [y, s1 + ', ' + s2];
}


let id = bind(bind(make(5), log("inc", inc)), log("dec", dec))
console.log(id)