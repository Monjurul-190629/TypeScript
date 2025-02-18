/*

TypeScript allows types to be defined separately from the variables that use them.

*/

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car1: Car = {
  year: carYear,
  type: carType,
  model: carModel
};


console.log(car1)


/// Interfaces are similar to type aliases, except they only apply to object types.


interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};

console.log(rectangle)



//// Interfaces can extend each other's definition.


interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};

console.log(coloredRectangle)