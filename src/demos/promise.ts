/* create a new promise. */
const p = new Promise(resolve => {
    setTimeout(() => {
        resolve('Hello from Promiseland!');
    }, 1000)
});

/* log single value that is emitted. */
p.then(value => console.log(value));
