import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import * as io from 'socket.io-client';

// Be sure to start socket.io server via `yarn start:server`

/* create a new observable, providing the observer. */
const messages = Observable.create((observer: Observer<any>) => {
  console.log('%cNew subscription created', 'background: #222; color: #bada55');

  const url = 'localhost:3000';
  const socket: SocketIOClient.Socket = io(url);
  
  socket.on('message', (data: any) => {
    observer.next(data);
  });
  
  return () => {
    socket.disconnect();
  };
});

/* An Observable is cold until subscribed. */
messages.subscribe((message: any) => console.log(message));

/* Multiple subscriptions will create multiple socket connections */
// const subscription = messages.subscribe((message: any) => console.log('First subscription', message));
// subscription.add(messages.subscribe((message: any) => console.log('Second subscription', message)));
// setTimeout(() => subscription.unsubscribe(), 6000);

/* TAKEAWAY */
// Observables are cold and unicast by default
