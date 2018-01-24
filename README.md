# Introduction to RxJS

This repository provides demonstrations of RxJS.
The repository includes the following demos:

1. src/demos/promise.ts - Using a promise.
2. src/demos/observable.ts - Creating a simple `Observable`.
3. src/demos/subject.ts - Creating a `Subject` with a late subscription.
4. src/demos/async-subject.ts - Creating an `AsyncSubject`.
5. src/demos/behavior-subject.ts - Creating a `BehaviorSubject`.
6. src/demos/replay-subject.ts - Creating a `ReplaySubject`.
7. src/demos/observable-unicast.ts - Observables are unicast by default.
8. src/demos/subject-multicast.ts - We can use a subject to make an observable hot and multicast.
9. src/demos/observable-cold.ts - Observables are cold by default.
10. src/demos/observable-hot-1.ts - We can make an observable hot and multicasted by a shared provider.
11. src/demos/observable-hot-2.ts - We can make an observable hot and multicasted by using the `share()` operator.

## Installation

To run the demos you need to first install the dependencies.
Run the install command from the root of your working copy:

```shell
$ yarn install
```

## Choose a Demo

You can run each demo by uncommenting the appropriate import statement in the `src/index.ts` file.

## View a Demo

To view a demo, run the webpack dev server, via:

```shell
$ yarn start:dev
```

Then browse to `http://localhost:8080`

## Socket.io

The hot vs cold observable demos use socket.io.
Start the socket.io server via:

```shell
$ yarn start:server
```

This will create a socket.io server listening on port 3000.