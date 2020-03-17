var Enum;
(function (Enum) {
    Enum[Enum["Blue"] = 1] = "Blue";
    Enum[Enum["Red"] = 2] = "Red";
})(Enum || (Enum = {}));
var a = Enum.Red;
var b = Enum[a];
console.log(b);
