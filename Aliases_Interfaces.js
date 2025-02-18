/*

TypeScript allows types to be defined separately from the variables that use them.

*/
var carYear = 2001;
var carType = "Toyota";
var carModel = "Corolla";
var car1 = {
    year: carYear,
    type: carType,
    model: carModel
};
console.log(car1);
var rectangle = {
    height: 20,
    width: 10
};
console.log(rectangle);
var coloredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
console.log(coloredRectangle);
