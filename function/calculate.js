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

let sum1 = addName //let sum=add(10,20) ให้ sum1 เป็นฟังก์ชั่นบวก
console.log(sum1) //แสดงค่าตัวแปร
console.log(typeof sum1) //บอกประเภทตัวแปล


console.log(sum1(10,20))
console.log(MinusName(10,20))
console.log(Multiplied(10,20))
console.log(Divide(10,20))




// // 2.we can send function as parameter
// function calculator (n1,n2,op){
//     return op(n1,n2)

// }
// console.log(calculator(10,5,addName))
// console.log(calculator(10,5,MinusName))
// console.log(calculator(10,5,Multiplied))
// console.log(calculator(10,5,Divide))