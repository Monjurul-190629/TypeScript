/*
An enum is a special "class" that represents a group of constants (unchangeable variables).

Enums come in two flavors string and numeric. Lets start with numeric.


*/
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
console.log(Direction.North);
var North1 = Direction.South;
console.log(North1);
var Ages;
(function (Ages) {
    Ages[Ages["age1"] = 20] = "age1";
    Ages[Ages["age2"] = 32] = "age2";
})(Ages || (Ages = {}));
console.log(Ages.age2);
