/*

TypeScript comes with a large number of types that can help with some common type manipulation,
 usually referred to as utility types.
*/

// Partial changes all the properties in an object to be optional.

interface check {
    x : number,
    y : number,
    z ?: string
}

const checker : Partial<check> = {

}
checker.x = 5;
console.log(checker)


///  Required changes all the properties in an object to be required.

const checkbar : Required<check> = {
    x : 10,
    y : 11,
    z : 'Hello'
}


console.log(checkbar)


///Record is a shortcut to defining an object type with a specific key type and value type.

const Nameagemap : Record<string, number> = {
    'shourav' : 22,
    'alice' : 23
}

console.log(Nameagemap)



// Omit removes keys from an object

const check1 : Omit<check , 'x' | 'z'> = {
    y: 99
}
console.log(check1)


// Pick removes all but the specified keys from an object type.


const check2 : Pick <check, 'z'> = {
   z : 'Ók fine pick is now ok'
}


const 