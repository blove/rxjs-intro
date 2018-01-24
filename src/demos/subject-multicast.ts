import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { multicast, publish } from "rxjs/operators";
import { ConnectableObservable } from "rxjs/observable/ConnectableObservable";

/* create a new observable, providing the observer. */
let i = 0;
const observable: Observable<number> = new Observable(observer => {
  
  console.log('%cNew subscription created', 'background: #222; color: #bada55');
  i++;
  
  const interval = setInterval(() => {
    observer.next(i);
  }, 2000);

  return () => {
    console.log('teardown');
    clearInterval(interval);
  }

});

/* Create a new Subject and invoke multicast(). */
const subject = new Subject<number>();
const multicasted = observable.pipe(
  multicast(subject)
);

/* Each subscription receives a copy of Observer. */
multicasted.subscribe(value => console.log('First subscription', value));
multicasted.subscribe(value => console.log('Second subscription', value));

/* Connect the subject to the observabe. */
// I should be able to invoke `multicasted.connect();`,
// const connectableObserable: ConnectableObservable<number> = multicasted.pipe(
//   publish()
// );
const subscription = observable.subscribe(subject);

/* Unsubscribe after 5 seconds. */
setTimeout(() => subscription.unsubscribe(), 5000);

/* TAKEAWAY */
// A "multicasted Observable" passes notifications 
// through a Subject which may have many subscribers