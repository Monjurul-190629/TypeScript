//// TypeScript adds types and visibility modifiers to JavaScript classes.

/*
Visibility Modifiers:

There are three main visibility modifiers in TypeScript.

public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes that inherit it,
which is covered in the inheritance section below

*/

class Person {
    private name: string;

    public constructor(name: string){
        this.name = name;
    }
    public getName():string{
        return this.name;
    }
}


const person1 = new Person('Shourav');


console.log(person1.getName())

/* Parameter can initialized

class Person {
  // name is a private member variable
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName());








*/


/// readonly propertices

/*
lass Person {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName());


*/


/// Inheritance implements
interface shape{
    getArea : () => number;
}


class Rectangle implements shape{
    public constructor(public readonly height: number,public readonly width: number){

    }
    public getArea= () :  number =>{
        return this.height * this.width;
    }
}

class Square extends Rectangle{
    public constructor(public readonly width: number){
        super(width, width)
    }
}

const Rec1 = new Rectangle(10, 5);
console.log(Rec1.getArea())

const Sqr = new Square(20);
console.log(Sqr.getArea())


/* When a class extends another class, it can replace the members of the parent class with the same name.

Newer versions of TypeScript allow explicitly marking this with the override keyword. */


class People{
  public name:string;
  public age:number;

  public constructor(name:string, age:number){
    this.name = name;
    this.age = age;
  }
  public getIntro(){
    return `His name is ${this.name} and His age is ${this.age}`
  }
}

class P1 extends People{
  public cls: string;
  public constructor(name: string, age: number, cls:string){
    super(name, age);
    this.cls = cls;
  }
  public override getIntro(){
      return `His name is ${this.name} and His age is ${this.age} and His class is ${this.cls}`
  }
}


const PP = new P1('Jhon', 32, 'A');

console.log(PP.getIntro())


/* 
Abstract Class
An abstract class is a class that cannot be instantiated and is meant to be inherited by other classes. 
It serves as a blueprint for derived classes, 
providing common methods and properties while enforcing certain functionalities that must be implemented by subclasses

*/

abstract class Polygon{
  public abstract getArea() : number;

  public toString() : string{
    return `This is done by abstract class.`
  }
}

class Rec2 extends Polygon{
  public constructor(protected readonly height: number, protected readonly width: number){
    super();
  }
  public getArea():number{
    return this.width * this.height;
  }
}


const R2  = new Rec2(20, 10);
console.log(R2.getArea())
