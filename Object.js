//// interface is a way to define the structure of a Object.
var student1;
student1 = {
    name: 'Monjurul',
    roll: 190629
};
console.log(student1);
// Another way
var car = {
    type: 'R1',
    model: 'toyota',
    year: 2000
};
console.log(car);
/*
TypeScript can infer the types of properties based on their values.

const car = {
  type: "Toyota",
};
car.type = "Ford"; // no error
car.type = 2; // Error: Type 'number' is not assignable to type 'string'.

*/
/// optional property 
var Employee = {
    id: 1
};
console.log(Employee);
Employee.name = "Monjurul";
console.log(Employee);
//// Index signatures can be used for objects without a defined list of properties.
var NameAge = {
    Moonjurul: 25,
    Shourav: 24
};
console.log(NameAge);
