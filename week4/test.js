var HelloWorld = "Hello World;";
var user = {
    username: "joe1",
    id: "1"
};
// test.ts:8:5 - error TS2322: Type 'string' is not assignable to type 'number'.
// 8     id: "1"
//       ~~
//   test.ts:3:5
//     3     id: number;
//           ~~
//     The expected type comes from property 'id' which is declared here on type 'User'
// Found 1 error.
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
console.log(x);
// Initialize it incorrectly
x = [10, "hello"]; // Error
// Type 'number' is not assignable to type 'string'.
// Type 'string' is not assignable to type 'number'.
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var notSure = 4;
notSure = "maybe a string instead";
// OK, definitely a boolean
notSure = false;
// OK, return value of 'getValue' is not checked
var str = getValue("myString");
var looselyTyped = 4;
// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();
var strictlyTyped = 4;
strictlyTyped.toFixed();
// Object is of type 'unknown'.
function warnUser() {
    console.log("This is my warning message");
}
var someValue = "this is a string";
var strLength = someValue.length;
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
//Sometimes, we may want to have optional properties. These allow for flexibility in the interface. Any property marked with a '?' is not necessary for usage of the interface.
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
//Now, when we make a new Point, it's properties cannot be changed later
var p1 = { x: 10, y: 20 };
p1.x = 5; // error!
// Cannot assign to 'x' because it is a read-only property.
//TypeScript comes with a ReadonlyArray<T> type that is the same as Array<T> with all mutating methods removed, so you can make sure you don’t change your arrays after creation:
var a = [1, 2, 3, 4];
var ro = a;
ro[0] = 12; // error!
// Index signature in type 'readonly number[]' only permits reading.
ro.push(5); // error!
// Property 'push' does not exist on type 'readonly number[]'.
ro.length = 100; // error!
// Cannot assign to 'length' because it is a read-only property.
a = ro; // error!
// The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
