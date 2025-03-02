/*

Generics in TypeScript allow you to create reusable and flexible components, functions
, or classes that work with multiple data types 
instead of being restricted to a single one. They enable you to write code that is both type-safe and scalable.

*/

function Pair<S, T>(p1:S, p2:T):[S, T]{
    return [p1, p2];
}

console.log(Pair<string, number>('Good', 13))
console.log(Pair<number, string>(12, 'very good'))



/// Class


class NamedValue<S> {
    private _value: S | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: S) {
      this._value = value;
    }
  
    public getValue(): S | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }
  
  let value = new NamedValue<number>('myNumber');
  value.setValue(10);
  console.log(value.toString()); // myNumber: 10




  // type alias

type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };

console.log(wrappedValue.value)
 
