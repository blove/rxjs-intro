import { Observable } from "rxjs/Observable";
import { filter, takeUntil } from "rxjs/operators";
import "rxjs/add/observable/interval";

/* create a new observable, providing the observer. */
const observable = Observable.interval(1000);

/* Unsubscribe when value is greater than 2 and even. */
let unsubscribe = observable.pipe(
  filter(value => value > 2 && value % 2 === 0)
);

/* Subscribe to Notifications. */
observable
  .pipe(
    takeUntil(unsubscribe)
  )
  .subscribe(value => console.log(value));