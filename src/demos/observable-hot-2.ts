import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { share } from "rxjs/operators";
import * as io from 'socket.io-client';

// Be sure to start socket.io server via `yarn start:server`

/* create a new observable, providing the observer. */
let socket: SocketIOClient.Socket;
const url = 'localhost:3000';
const messages = Observable.create((observer: Observer<any>) => {
  console.log('%cNew subscription created', 'background: #222; color: #bada55');

  socket = io(url);
  
  socket.on('message', (data: any) => {
    observer.next(data);
  });
  
  return () => {
    socket.disconnect();
  };  
})
.pipe(share());

/* Multiple subscriptions will open single connection. */
const subscription = messages.subscribe((message: any) => console.log('First subscription', message));
subscription.add(messages.subscribe((message: any) => console.log('Second subscription', message)));
setTimeout(() => subscription.unsubscribe(), 6000);

/* TAKEAWAY */
// In RxJS 5, the operator `share()` makes a hot, 
// refCounted observable that can be retried on failure, 
// or repeated on success. 
