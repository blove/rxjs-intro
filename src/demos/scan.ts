import { Subject } from "rxjs/Subject";
import { scan } from "rxjs/operators";

const subject = new Subject<number>();

subject
  .pipe(scan((acc, value) => (acc += value)))
  .subscribe(value => console.log(value));

subject.next(1);
subject.next(2);
subject.next(3);
// subject.complete();
