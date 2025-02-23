/* Union types are used when a value can be more than a single type.

Union | (OR)
Using the | we are saying our parameter is a string or number:



*/
function printStatusCode(code) {
    console.log("My code is ".concat(code));
}
printStatusCode(404);
printStatusCode('402');
