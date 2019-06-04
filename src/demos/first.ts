import { Observable } from "rxjs/Observable";
import { first } from "rxjs/operators";
import "rxjs/add/observable/from";

const observable = Observable.from([1, 2, 3, 4, 5])
  .pipe(first(value => value % 2 === 0))
  .subscribe(value => console.log(value));
