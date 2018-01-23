import { Subject } from "rxjs/Subject";

/* create an instance of Subject. */
const s = new Subject<number>();

/* Subscribe to subject. */
s.subscribe(
  next => console.log('before 1:', next),
  error => console.warn(error),
  () => console.log('complete before 1')
);
s.subscribe(
  next => console.log('before 2:', next),
  error => console.warn(error),
  () => console.log('complete before 2')
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

/* Late subscription will now receive Notification. */
s.next(4);
s.complete();

/* TAKEAWAY */
// Subjects are both an observable as well as an observer