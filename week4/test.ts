let HelloWorld = "Hello World;"
interface User {
    name: string;
    id: number;
}
  
const user: User = {
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
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
console.log(x);
// Initialize it incorrectly
x = [10, "hello"]; // Error

// Type 'number' is not assignable to type 'string'.
// Type 'string' is not assignable to type 'number'.

enum Color {
    Red = 1,
    Green = 2,
    Blue = 4,
  }
  let c: Color = Color.Green;

  let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;

declare function getValue(key: string): any;
// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");

let looselyTyped: any = 4;
// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();

let strictlyTyped: unknown = 4;
strictlyTyped.toFixed();
// Object is of type 'unknown'.

function warnUser(): void {
    console.log("This is my warning message");
  }

  let someValue: unknown = "this is a string";

  let strLength: number = (<string>someValue).length;

  interface LabeledValue {
    label: string;
  }
  
  function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }
  
  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);
  //You can see here that we now have a function that takes in our interface. The functionality is the same, but it's a bit cleaner!

  interface SquareConfig {
    color?: string;
    width?: number;
  }
  
  //Sometimes, we may want to have optional properties. These allow for flexibility in the interface. Any property marked with a '?' is not necessary for usage of the interface.
  function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }
  
  let mySquare = createSquare({ color: "black" });

  //The advantage of optional properties is that you can describe these possibly available properties while still also preventing use of properties that are not part of the interface.

  //Readonly properties 
//Some properties should only be modifiable when an object is first created. You can specify this by putting readonly before the name of the property
  interface Point {
    readonly x: number;
    readonly y: number;
  }
  //Now, when we make a new Point, it's properties cannot be changed later
  let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
// Cannot assign to 'x' because it is a read-only property.

//TypeScript comes with a ReadonlyArray<T> type that is the same as Array<T> with all mutating methods removed, so you can make sure you don’t change your arrays after creation:
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

ro[0] = 12; // error!
// Index signature in type 'readonly number[]' only permits reading.
ro.push(5); // error!
// Property 'push' does not exist on type 'readonly number[]'.
ro.length = 100; // error!
// Cannot assign to 'length' because it is a read-only property.
a = ro; // error!
// The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.