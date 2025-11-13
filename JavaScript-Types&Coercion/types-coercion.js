//primitives
console.log(typeof undefined);//undefined
console.log(typeof null);//object-historic js quick
console.log(typeof 42);//number
console.log(typeof 1n);//bigint
console.log(typeof 'hi');//string
console.log(typeof Symbol('s'));//symbol
console.log(typeof true);//boolean

//objects
console.log(typeof {});//object
console.log(typeof []);//object
console.log(typeof function(){});//function

//== vs ===
console.log(''==0);//true
console.log(''===0);//false
console.log(null==undefined);//true
console.log(null===undefined);//false

//Coercion in + and -
console.log('5'+3)//53(string)
console.log('5'-3)//2('5'->number)
console.log(true+true);//2(true->1)

//Object to primitives
const o={valueof(){return 10;},toString(){
    return 'x';
}};
console.log(o+5);//15 because valueOf() return 10
const a=[];
console.log(a+1);//"1"
console.log([1,2]+[3,4]);//"1,23,4"

//Nan and isNan
console.log(Number('foo'));//Nan
console.log(NaN===NaN);//false-NaN is not equal to itself
console.log(Number.isNaN(Number('foo')));//true

console.log([] == ![]); // true — weird but explainable:
 // ![] -> false, [] == false -> [] -> '' -> 0 -> 0 == 0 -> true

// Explicit conversions (best practice)
console.log(Number('42')); // 42
console.log(String(42));   // "42"
console.log(Boolean(''));   // false