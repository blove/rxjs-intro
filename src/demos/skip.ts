import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { skip } from "rxjs/operators";

const subject = new BehaviorSubject<number>(null);

subject.pipe(skip(2)).subscribe(value => console.log(value));

subject.next(1);
subject.next(2);
subject.next(3);
