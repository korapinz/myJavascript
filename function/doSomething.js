// 3. we can return function as a result of another function
function saySomething(){
    return "Good morning"
}

function doSomething(){
    return saySomething //3. return function
}

let doIt = doSomething() //let sum = add

// console.log(doIt("hello"))

console.log(doIt())
console.log(doSomething())
console.log(saySomething())