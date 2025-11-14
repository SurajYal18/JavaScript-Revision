//What is Callback function in javaScript

setTimeout(function(){
    console.log("time")
},5000)
function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
});


//JavaScript is a synchronous and single-threaded Language
//Blocking the main thread
//Power of Callbacks
//Deep about Event Listeners
//Closures Demo with Event Listeners
//Scope Demo with Event Listeners
//Garbage Collection & removeEventListeners