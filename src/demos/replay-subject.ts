import { ReplaySubject } from "rxjs/ReplaySubject";

/* create an instance of ReplaySubject. */
const s = new ReplaySubject<number>();

/* Subscribe to subject. */
s.subscribe(
  next => console.log('before:', next),
  error => console.warn(error),
  () => console.log('complete before')
);

/* Emit some values. */
s.next(1);
s.next(2);
s.next(3);

/* Subscribe late to subject. */
s.subscribe(
  next => console.log('after:', next),
  error => console.warn(error),
  () => console.log('complete after')
);

/* Complete the observable stream. */
s.complete();

/* TAKEAWAY */
// ReplaySubject emits to any observer all of the items 
// that were emitted by the source Observable(s), 
// regardless of when the observer subscribes.
