import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { startWith } from "rxjs/operators";
import "rxjs/add/observable/of";

const subject = new BehaviorSubject<number>(null);

subject
  .pipe(startWith(-1), startWith(0))
  .subscribe(value => console.log(value));

subject.next(1);
subject.next(2);
subject.next(3);
