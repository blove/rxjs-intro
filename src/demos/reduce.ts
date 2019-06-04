import { Subject } from "rxjs/Subject";
import { reduce } from "rxjs/operators";

const subject = new Subject<number>();

subject
  .pipe(reduce((acc, value) => (acc += value)))
  .subscribe(value => console.log(value));

subject.next(1);
subject.next(2);
subject.next(3);

/* Completion notification will invoke reduce(). */
subject.complete();
