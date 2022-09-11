// let num = 5
// //const result = num%2 === 0? "even":"odd"
// let result
// if(num%2===0)
//     result="even"
// else
//     result="odd"
// console.log(result)

// const items1=[5,10,15,20]
// let items2=null
// console.log(items1[0])
// console.log(items2?.[0])

// const obj1={id:123,firstname:'Somchai',sex:'male'}
// let obj2 = null
// console.log(obj1.id)
// console.log(obj2?.id)

// let arr
// let newArr=arr??[]
// console.log(newArr)
// console.log(newArr.length)

// for(const i of arr){
//     console.log(i)
// }

// let student={id:123,sex:"male"}
// student.sex=student.sex??'N/A'
// // console.log(student)
// //for in
// for(const prop in student){
//     // console.log(prop)
//     console.log(student[prop])
// }

// let letter ='a'
// let grade
// switch(letter){
//     case'a':
//     case'A': grade = 'A'
//                 break
//     case'b':
//     case'B': grade = 'B'
//                 break
//     case'c':            
//     case'C': grade = 'C'
//                 break   
//     default: grade = 'F'
// }
// console.log(grade)

// let nums=[1,3,5,7,9, true, "hello world"]
//  console.log(nums[0])
//  console.log(nums[nums.length-1])

// for (const num of nums) {
//     console.log(num)   
// }

// let a=[]
// let b=null
// let c
// let d=[1,2,3]
// console.log(a.length)
// console.log(b?.length) 
// console.log(c?.length)
// console.log(d.length)

// let b=[5,10,15]
// let a=Array.from(b) 
// console.log(a)
// // let g=Array.of(2)
// // console.log(g)
// // let h=Array.of("Hi","hello")
// // console.log(h)
// delete a[0]
// console.log[a[2]]
// console.log[a.length]

// let arr1 = ["Hello world","Good night","Good morning","Hi","Hey"]

// let [greeting1,greeting2,...otherGreeting]=arr1 //destructuring
// // let greeting1=arr1[0]
// // let greeting2=arr1[1]

// console.log(greeting1)
// console.log(greeting2)
// console.log(otherGreeting)

// let a=[true,null,5]
// let b=[...a,3]
// console.log(a)

// let [x,...y]=a
// console.log(x)
// console.log(y)

// let str='Beginner'
// let letters=[...str]
// // console.log(letters)
// for (const [index,letter] of letters.entries()) {
//     //const [index,letter]=letter.entries()
//     console.log(`index:${index}, letter:${letter}`)    
// }

// function doSomthing(x){
//     return x
// }
// //execute
// console.log(doSomthing(5))
// console.log(doSomthing("Hello world"))

// let a=[1,2] //concat a+b to new array
// let b=[3,4]
// c=a.concat(b)
// console.log(a)
// console.log(b)
// console.log(c)

// let x=[3,5,7]
// x.reverse()
// console.log(x) //change value of x to reverse

const array1=[1,2,3] //check data in array
console.log(array1.includes(2)) //เช็คว่ามี 2 มั้ย

const array2=[1,2,3]
console.log(array2.indexOf(3)) //find index of array

const animal=[1,2,3,4,5]
console.log(animal.push()) //find index of array
console.log(animal.pop())
console.log(animal.unshift(4,5))
console.log(animal.shift()) //delete first data
console.log(animal.slice(2)) //split array follow my index
console.log(animal.slice(2,4)) //get 2 3 