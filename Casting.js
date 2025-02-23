/*

Casting is the process of overriding a type.

 */
var x = 'hello';
console.log(x.length);
/*
Casting with <>
Using <> works the same as casting with as.

*/
var x2 = 'hello';
console.log(x.length);
/*
Force casting

To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
*/
var x1 = 'hello';
//console.log(((x as unknown) as number).length); // x is not actually a number so this will return undefined
