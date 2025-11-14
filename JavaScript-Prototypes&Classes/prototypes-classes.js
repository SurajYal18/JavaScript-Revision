//JavaScript uses prototype-based inheritance, 
// meaning every object has an internal link
//  to another object called its prototype.

//Prototype Basics
const user={name:"Suraj"};
const student={roll:21};

//Setting prototype explicity
Object.setPrototypeOf(student,user);

console.log(student.name);//inherited from user
console.log(student.roll);//Own Property

//Constructor function+prototype
function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.sayHello=function(){
    return `Hi.I'm ${this.name}`;
};

const p1=new Person("Suraj",21);
console.log(p1.sayHello());


//ES6 Classes
class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        return `${this.name} makes a sound.`;
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed=breed;
    }
    speak(){
        return `${this.name} barks (Breed:${this.breed}).`;
    }
}

const d=new Dog("Tommy","Labrador");
console.log(d.speak());

//Static Methods
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(10, 5));

//Problem 1
class Car{
    constructor(brand,model){
        this.brand=brand;
        this.model=model;

    }
    getInfo(){
        return `${this.brand} ${this.model} `;
    }
}

const c = new Car("Honda", "City");
console.log(c.getInfo()); // "Honda City"

//Problem 2:
class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);   // call parent constructor
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  describe() {
    return `Color: ${this.color}, Area: ${this.area()}`;
  }
}

// Example
const r = new Rectangle("Red", 10, 5);
console.log(r.describe()); // Color: Red, Area: 50
