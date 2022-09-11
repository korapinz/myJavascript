// let nums=[1,3,5,7,9,true,"Hi"]

// for (const num of nums) { //for of
//     console.log(num)   
// }


// for(let i=0;i<nums.length;i++){ //for loop
//     console.log(nums[i])
// }


// nums.forEach(getNums)  //for each
// function getNums(num){
//     console.log(num)
// 

function fillStartWord(startWord, word) {
    if (word === undefined){
      return undefined
    
    }else if(word === null){
        return undefined
      
    }else if(startWord = undefined){
      startWord ="starWord"
      return startWord+word
    
    }else{
      return startWord+word
    }
    
    }