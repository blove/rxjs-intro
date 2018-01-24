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