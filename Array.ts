const names: string[] = ['Alice']

names.push('Bob')

console.log(names)

const names1 : readonly string[] = ['alice'];

/// names1.push('bob') /// No, It can't add because of readonly prevents the changing
//// TypeScript can infer the type of an array if it has values.
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
//numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error



/*
A tuple is a typed array with a pre-defined length and types for each index.

*/

let ourTuple: [number, boolean, string, string[]];


ourTuple = [2, true, 'Nice done', ['Hello', 'World']]
/// // We have no type safety in our tuple for indexes 3+

ourTuple.push('Ok New one is added')

// But if readonly is used, then No change is done.
// let ourTuple : readonly [number, string, boolean]

console.log(ourTuple)