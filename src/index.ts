// #!/usr/bin/env ts-node-script

interface Job  {
    title: string,
    name?: string,
    age?: number
}

const userJob = (user: Job): void  => {
    console.log(user.title + user.name + user.age )
}

userJob({title: "Developer ", name: "Uchena ", age: 29})
userJob({title: "Data analyst ", name: "Uchena ", age: 34})


let w: unknown = 1;

w = "string"; // no error

w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void };

// w.runANonExistentMethod()

(w as { runANonExistentMethod: Function }).runANonExistentMethod()

// Arrays
let arrStr: string[] = []

arrStr.push("Ucheh")
console.log(arrStr)

// Tuple
let myTuple: readonly [name: string, opt: boolean, age: number]

myTuple = ["Uchennah", true, 39]

let [a, b, c] = myTuple

// myTuple.push("As we do")

console.log(a, b)

// Type aliases

// Example say
type myName = string
type myAge = number
type ocupation = string

let mName: myName

mName = "Uvjr"

console.log(mName)

type gener = {
    myName: myName,
    myAge: myAge,
    occupation: ocupation
}

let mObj: gener = {
    myName: "Udu",
    myAge: 39,
    occupation: "Biz admin"
}

console.log(mObj)

// Unions
function printStatusCode(code: string | number = 23) {
    typeof code == "string" ?
      console.log(`My status code is ${code.toUpperCase()}.`) : console.log(code) // error: Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'
    }
    
    printStatusCode(345)

    // Casting is the process of overriding a type

    let casted: unknown = "A Test file"

    // casted as string 

    console.log((casted as string).length)

// Force casting

let x = 'Hello'

// console.log(((x as unknown) as number).length)

// TS generics

const reverseArr = <U>(arr: U[]): U[] => {
    return arr.reverse()
}

console.log(reverseArr<number>([1,2,3,4,5]))
console.log(reverseArr<string>(['Uche', 'John', "Rose"]))

// Intersection Types

// keyof, keyword used to extract the key type from an object type.
function printPersonProperty(jobs: Job, property: keyof Job){
    console.log(property, jobs[property])
}

printPersonProperty({title: "Developer ", name: "Uchena ", age: 29}, "age")

// TS Enum
enum cordinate {
    u = 9,
    c = 19,
    h,
    e
}

console.log(cordinate.c)


interface Location {
    from: string;
    to: string;
}

function printCoord(holiday: Location) {
    console.log("We are going from " + holiday.from + " to " + holiday.to);
}


// Type assertion
printCoord({ from: "London", to: "New York" } as Location);

let Arr: number[] = [2, 3, 4]

console.log(Arr, "Array generics")

function removeItemFromArray<T>(arr: Array<T>, item: T): Array<T> {
    const index = arr.findIndex((i) => i === item);
    arr.splice(index, 1);
    return arr;
  }

  console.log(removeItemFromArray<string>(["red", "green", "blue"], "green"));
  console.log(removeItemFromArray<number>([1, 2, 3, 4, 5, 6], 2));

