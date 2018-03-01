import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import * as io from 'socket.io-client';

// Be sure to start socket.io server via `yarn start:server`

/* Create single connection outside of observer to avoid multiple connections. */
let socket: SocketIOClient.Socket;
const url = 'localhost:3000';
socket = io(url);

/* create a new observable, providing the observer. */
const messages = Observable.create((observer: Observer<any>) => {
  console.log('%cNew subscription created', 'background: #222; color: #bada55');

  socket.on('message', (data: any) => observer.next(data));
});

/* Multiple subscriptions will open single connection. */
// const subscription = messages.subscribe((message: any) => console.log('First subscription', message));
// subscription.add(messages.subscribe((message: any) => console.log('Second subscription', message)));
// setTimeout(() => subscription.unsubscribe(), 6000);

/* TAKEAWAY */
// We can make an observable "warm" by moving
// the creation of the connection outside
// of the obserable.
