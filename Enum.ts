/* 
An enum is a special "class" that represents a group of constants (unchangeable variables).

Enums come in two flavors string and numeric. Lets start with numeric.


*/

enum Direction {
    North, 
    South,
    East, 
    West
}

console.log(Direction.North)
const North1 = Direction.South;
console.log(North1)


enum Ages {
    age1 = 20,
    age2 = 32
}

console.log(Ages.age2)