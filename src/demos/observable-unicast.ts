import { Observable } from "rxjs/Observable";

/* create a new observable, providing the observer. */
let i = 0;
const observable: Observable<number> = new Observable(observer => {
  console.log("%cNew subscription created", "background: #222; color: #bada55");
  i++;

  const interval = setInterval(() => {
    observer.next(i);
  }, 1000);

  return () => {
    clearInterval(interval);
  };
});

/* Each subscription receives a copy of Observer. */
const subscription1 = observable.subscribe(value =>
  console.log("First subscription", value)
);
const subscription2 = observable.subscribe(value =>
  console.log("Second subscription", value)
);

/* Unsubscribe after 5 seconds. */
setTimeout(() => {
  subscription1.unsubscribe();
  subscription2.unsubscribe();
}, 5000);

/* TAKEAWAY */
// Observables are unicast by default
