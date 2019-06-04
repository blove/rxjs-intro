import { BehaviorSubject } from "rxjs/BehaviorSubject";

/* create an instance of BehaviorSubject. */
const s = new BehaviorSubject<number>(0);

/* Subscribe to subject. */
s.subscribe(
  next => console.log("before:", next),
  error => console.warn(error),
  () => console.log("complete before")
);

/* Emit some values. */
s.next(1);
s.next(2);
s.next(3);
// s.complete();

/* Subscribe late to subject. */
s.subscribe(
  next => console.log("after:", next),
  error => console.warn(error),
  () => console.log("complete after")
);

/* TAKEAWAY */
// When an observer subscribes to a BehaviorSubject,
// it begins by emitting the item most recently emitted by the source Observable
// (or a seed/default value if none has yet been emitted)
// and then continues to emit any other items emitted later by the source Observable(s).
