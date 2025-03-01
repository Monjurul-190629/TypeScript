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