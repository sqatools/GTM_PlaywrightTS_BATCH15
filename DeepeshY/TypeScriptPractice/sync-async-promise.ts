//TypeScript (and JavaScript), execution flows in one of two modes: Synchronous or Asynchronous. Understanding this distinction—and how Promises bridge the gap—is foundational to building responsive applications.

// 1. Sync vs. Async Execution
// Synchronous (Sync)
// Code runs sequentially, line-by-line. Each task must complete before the 
// program moves to the next line. If a line takes 5 seconds to run, the entire 
// program pauses (blocks) for 5 seconds.


// Asynchronous (Async)
// Code starts a task in the background and immediately moves on to the 
// next line without waiting. When the background task finishes, its result 
// is processed later. This prevents network requests, 
// database operations, or file reading from freezing your UI or server.

// sync behviour
/*
console.log("step1:Start of the program")
console.log("step2:Execution")
console.log("step3:End of the program")
*/

//async behviour 
console.log("step 1")

setTimeout(()=> {
    console.log("Step 2")
}, 3000)

console.log("step 3")


/*
Understanding Promises
A Promise is a TypeScript/JavaScript object that acts as a placeholder for a 
value that is not known yet, but will be resolved in the future 
(e.g., data coming from an API call).

In TypeScript, a promise is strongly typed as Promise<T>, where T is the type 
of data it will eventually produce.

The 3 States of a Promise
pending: Initial state; the async task is still running.
fulfilled: The task completed successfully (resolve was called).
rejected: The task failed with an error (reject was called).



*/