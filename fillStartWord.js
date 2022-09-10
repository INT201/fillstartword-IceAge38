const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  //code here
  

   if (word == null || word == undefined){
    return undefined
  }  if (startWord === word.substring(0,startWord.length)){
    return word
  } else{
  return startWord+word}
}
// console.log(fillStartWord("1-2565-","Hello World"))
// console.log(fillStartWord("JS", "beginner"))
// console.log(fillStartWord("first", "firststep"))
// console.log(fillStartWord("first", null))
// console.log(fillStartWord("first", undefined))

module.exports = fillStartWord
