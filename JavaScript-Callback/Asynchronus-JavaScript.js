//it handles asynchronous operations using the event loop,
//  callbacks, promises, and async/await. Asynchronous code allows 
// JS to perform tasks like API calls, timers, file reads, and database
//  queries without blocking the main thread.

//1. Callback example
function fetchDataCallback(callback){
    setTimeout(()=>{
        callback("Data loaded via callback");
    },1000);
}
fetchDataCallback( msg=>console.log(msg));

//2. Promise example
function fetchDataPromise(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve("Data Loaded via Promise"),1000);
    });
}
fetchDataPromise().then(msg=>console.log(msg));

//3. Async/await example
function fetchDataAsync() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data loaded via async/await"), 1000);
  });
}

async function start(){
    const data=await fetchDataAsync();
    console.log(data);
}
start();