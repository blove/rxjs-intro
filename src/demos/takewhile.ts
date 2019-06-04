import "rxjs/add/observable/interval";

import { Observable } from "rxjs/Observable";
import { takeWhile } from "rxjs/operators";

/* create a new observable, providing the observer. */
const observable = Observable.interval(1000);

/* Store component state. */
let alive = true;

/* Subscribe to Notifications. */
observable.pipe(takeWhile(() => alive)).subscribe(value => console.log(value));

/* Toggle component state. */
setTimeout(() => (alive = false), 6000);
