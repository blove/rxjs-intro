import { Observable } from "rxjs/Observable";
import { interval } from "rxjs/observable/interval";
import { catchError, filter, map } from "rxjs/operators";
import "rxjs/add/observable/of";

const observable: Observable<number> = interval(1000);

try {
  observable
    .pipe(
      map((i: number) => {
        if (i > 5) {
          throw new Error("uh oh");
        }
        return i;
      }),
      catchError(e => {
        console.error(e);
        return Observable.of(e);
      }),
      map((i: number) => {
        if (typeof i === "number") {
          return i;
        }
        console.log("Houston, we have a problem");
      })
    )
    .subscribe(value => console.log(value));
} catch (e) {
  console.log("caught");
}
