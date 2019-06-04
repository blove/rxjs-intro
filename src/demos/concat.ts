import { Subject } from "rxjs/Subject";
import { concat } from "rxjs/operators";

const subject1 = new Subject();
const subject2 = new Subject();

subject1.pipe(concat(subject2));
subject1.subscribe(value => console.log("1", value));
subject2.subscribe(value => console.log("2", value));

subject1.next(1);
subject2.next(4);

subject1.next(2);
subject2.next(5);

subject1.next(3);
subject2.next(6);

subject1.complete();
subject2.complete();
