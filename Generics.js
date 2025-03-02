/*

Generics in TypeScript allow you to create reusable and flexible components, functions
, or classes that work with multiple data types
instead of being restricted to a single one. They enable you to write code that is both type-safe and scalable.

*/
function Pair(p1, p2) {
    return [p1, p2];
}
console.log(Pair('Good', 13));
console.log(Pair(12, 'very good'));
/// Class
var NamedValue = /** @class */ (function () {
    function NamedValue(name) {
        this.name = name;
    }
    NamedValue.prototype.setValue = function (value) {
        this._value = value;
    };
    NamedValue.prototype.getValue = function () {
        return this._value;
    };
    NamedValue.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this._value);
    };
    return NamedValue;
}());
var value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10
var wrappedValue = { value: 10 };
console.log(wrappedValue.value);
