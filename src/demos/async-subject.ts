import { AsyncSubject } from "rxjs/AsyncSubject";

/* create an instance of AsyncSubject. */
const s = new AsyncSubject<number>();

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
// we must complete so values are emited to subscriptions
s.complete();

/* TAKEAWAY */
// An AsyncSubject emits the last value 
// (and only the last value) 
// emitted by the source Observable, 
// and only after that source Observable completes.
