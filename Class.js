//// TypeScript adds types and visibility modifiers to JavaScript classes.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
Visibility Modifiers:

There are three main visibility modifiers in TypeScript.

public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes that inherit it,
which is covered in the inheritance section below

*/
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person1 = new Person('Shourav');
console.log(person1.getName());
var Rectangle = /** @class */ (function () {
    function Rectangle(height, width) {
        var _this = this;
        this.height = height;
        this.width = width;
        this.getArea = function () {
            return _this.height * _this.width;
        };
    }
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        var _this = _super.call(this, width, width) || this;
        _this.width = width;
        return _this;
    }
    return Square;
}(Rectangle));
var Rec1 = new Rectangle(10, 5);
console.log(Rec1.getArea());
var Sqr = new Square(20);
console.log(Sqr.getArea());
