//Function Statement aka function Declaration
function a(){
    console.log("a called");
}

//Function Expression
var b=function(){
    console.log("b called");
}

//difference between statement and expression is hosting

//Anonymous Function
// function(){
    
// }



//Named Function Expression
var c=function xyz(){
    console.log("Helllo");
}
c();

//Difference between Parameters & Arguments
// function(parms)
//a(1,2)//argument

//First Class Function-ability to be used like values(first class citizens)
var d=function(){
    return function(){
        console.log("First order function");
    }
}
console.log(b());

//Arrow Function
