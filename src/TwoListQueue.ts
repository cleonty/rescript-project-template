interface Queue<T> {
  front: T[];
  back: T[];
}

const empty = <T>(): Queue<T> => ({front: [], back: []});
const peek = <T>(q: Queue<T>): T | undefined => {
  if (q.front.length === 0) { 
      return undefined;
       }
  else {
      return q.front[0];
  }
}

const enqueue = <T>(q: Queue<T>, x: T): void => {
  if (q.front.length === 0) {
      q.front = [x];
      q.back = [];
  } else {
      q.back.unshift(x);
  } 
}

const dequeue = <T>(q: Queue<T>): void => {
  if (q.front.length === 0) { 
      return;
  } else if (q.front.length === 1) {
      q.front = q.back.reverse();
      q.back = [];
  } else {
      q.front.shift();
  }
}

const q = empty<number>();

for (let i = 0; i < 10; i++) {
  enqueue(q, i + 1);
}

for (let i = 0; i < 10; i++) {
  console.log(q);
  const val = peek(q);
  console.log(val);
  if (val) {
      dequeue(q);
  }
}

