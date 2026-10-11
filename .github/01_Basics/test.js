"use strict";
console.log("Hello")

const accountId = 5465
let accountEmail = "hello@gmail.com"
var accountPassword = 54452
let accountState = "Goa"
let accountCity;
console.table([accountId, accountEmail, accountPassword, accountState, accountCity])

console.log(typeof null)  // object
console.log(typeof undefined) // undefined
console.log(typeof 543) // number
console.log(typeof "H") // string
console.log(typeof true) // boolean
console.log(typeof BigInt) // function
console.log(typeof 5643354338797908n) // bigint
console.log(typeof Symbol) // function
console.log(typeof Object) // function
console.log("Hello")

let score = "33a"
let isNumber = Number(score)
console.log(isNumber) // NaN
console.log(typeof isNumber) // number
// 33 => number
// 33a => NaN
// true => 1; false => 0;
// "" => false;
let isLoggedin = null
console.log(isLoggedin) // null
let boolLoggedin = Boolean(isLoggedin)
console.log(boolLoggedin) // false

const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id === anotherId) // false

let value = 3
let negValue = -value
console.log(negValue) // -3

let str1 = "Hello"
let str2 = " World!!"
let str3 = str1 + str2
console.log(str3) // Hello World!!

console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32
console.log(+true) // 1
console.log(+"") // 0

console.log("2" > 1) // true
console.log(null > 0) // false
console.log(null < 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true
console.log(null <= 0) // true

console.log(undefined == 0) // false
console.log(undefined >= 0) // false

console.log("2" == 2) // true
console.log("2" === 2) // false

const heroes = ["Superman", "Flash", "Shaktiman", "Shazam"];
let myObj = {
    name : "Ak",
    age : 20,
}
const myFunction = function(){
    console.log("Thank You!!");
}
console.log(myObj.name) // Ak
console.log(myObj.age) // 20
console.log(typeof heroes)  // object
console.log(typeof myObj)  // object
console.log(typeof myFunction)  // function
console.log(myFunction) // [Function: myFunction]