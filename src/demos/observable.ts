import { Observable } from "rxjs/Observable";

/* create a new observable, providing the observer. */
const observable: Observable<string> = new Observable(observer => {
  const interval = setInterval(() => {
    observer.next("Hello from Observableland!");
  }, 2000);

  // teardown
  return () => {
    clearInterval(interval);
  };
});

/* Subscribe to Notifications. */
observable.subscribe(value => console.log(value));

/* TAKEAWAY */
// Observables are simply function that take an observer and return a function
