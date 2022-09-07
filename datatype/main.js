/*console.log("Korapin")
function displayMessage(msg){
    console.log("starting...fucntion")
    console.log(msg)
    console.log("ending...function")
}
let greetingMsg="Welcome JavaScript Class"
displayMessage(greetingMsg)
*/

/*
console.log('INT201')
console.log('Vanila Javascript')
console.log('Section 1')
console.log('Goodbye')
*/

/*
// Asychronous Program

console.log('INT201')
console.log('Vanila Javascript')

setTimeout(function cb(){
    console.log('Section 1')
}, 5000)
    

//setTimeout(fuction, millisecode)
console.log('Goodbye')
*/

// 1.we can assign fucntion to variable


//บวก
function addName (n1,n2){
    return n1+n2
}

//ลบ
function MinusName (n1,n2){
    return n1-n2
}


//คูณ
function Multiplied(n1,n2){
    return n1*n2
}


//หาร
function Divide (n1,n2){
    return n1/n2
}


/*let sum1 = addName //let sum=add(10,20)
console.log(sum1) //แสดงค่าตัวแปร
console.log(typeof sum1) //บอกประเภทตัวแปล
*/

/*
let sum2=addName(10,20)
console.log(sum2)
console.log(typeof sum2)
*/

//console.log(sum1(10,20))
//console.log(MinusName(10,20))
//console.log(Multiplied(10,20))
//console.log(Divide(10,20))

// 2.we can send function as parameter
// function calculator (n1,n2,op){
//     return op(n1,n2)

// }
// console.log(calculator(10,5,addName))
// console.log(calculator(10,5,MinusName))
// console.log(calculator(10,5,Multiplied))
// console.log(calculator(10,5,Divide))

// 3. we can return function as a result of another function
// function saySomething(){
//     return "Good morning"
// }

// function doSomething(){
//     return saySomething //3. return function
// }

// let doIt = doSomething() //let sum = add

// // console.log(doIt("hello"))

// console.log(doIt())
// console.log(doSomething())
// console.log(saySomething())

// number จำนวณเต็มกับทศนิยม
let num1 = 100
let num2 = 20.25
let num3 = 1n
console.log(typeof num1)
console.log(typeof num2)
console.log(typeof num3)

// String
// let str1 = 'Hello' //single quote
// let str2 = "Hello" //double quote
// let str3 = `Greeting with ${str1},${str2}` //backticks
// console.log(typeof str1)
// console.log(typeof str2)
// console.log(typeof str3)
// console.log(str3)

// //boolean
// let isHoliday = true
// let absent = false
// console.log(typeof isHoliday)
// console.log(typeof absent)
// console.log(isHoliday)

// //symbol
// let sym1=Symbol(`id`)
// let sym2=Symbol(`id`)
// let sym3=(`id`)
// let sym4=(`id`)
// console.log(typeof sym1)
// console.log(typeof sym2)
// console.log(sym1===sym2)
// console.log(sym3===sym4)

// null
let unknowObj = null
console.log(typeof unknowObj)
console.log(unknowObj)

//undefined
let unAssingedObj
console.log(typeof unAssingedObj)
console.log(unAssingedObj)

// Object
let student={studentId:64130500003,name: 'Korapin'} //{key:value,..}
console.log(typeof student)
console.log(student)

let students=['Jeng,Karn,Ni']
console.log(typeof student)
console.log(students)