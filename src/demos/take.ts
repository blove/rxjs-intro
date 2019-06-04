import { Observable } from "rxjs/Observable";
import { take } from "rxjs/operators";
import "rxjs/add/observable/from";

const observable = Observable.from([1, 2, 3, 4, 5])
  .pipe(take(2))
  .subscribe(value => console.log(value));
