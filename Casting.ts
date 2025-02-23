/* 

Casting is the process of overriding a type.

 */

let x: unknown = 'hello';
console.log((x as string).length);

/* 
Casting with <>
Using <> works the same as casting with as.

*/
let x2: unknown = 'hello';
console.log((<string>x).length);


/*
Force casting

To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
*/

let x1 = 'hello';
//console.log(((x as unknown) as number).length); // x is not actually a number so this will return undefined