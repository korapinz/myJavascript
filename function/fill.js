function fillStartWord(startWord,word) {
  if(word == null){
    return undefined
  }
  else if(word == undefined){
    return undefined
  }
 else if(startWord == 'first'){
  return word
 }
else {
  return startWord+word
}
}

    console.log(fillStartWord("mom","dad"))
    console.log(fillStartWord("Marie",null))
    console.log(fillStartWord(undefined,"dad"))
    console.log(fillStartWord(undefined,null))
 