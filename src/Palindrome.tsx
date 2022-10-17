import React from 'react'
// check Palindrome 
const Palindrome = (inputString : string) => {
  let result = false;
 // check Palindrome length
  const strLen = inputString.length
  if(strLen > 0) // if length is greater than 0
  {
    // convert to lowercase
    const inputStringLower = inputString.toLowerCase() 
    // middle number 
    const midNumber = strLen/2
    for(let i = 0 ; i < midNumber; i++)
    {
     // check forward and backword string 
      if (inputStringLower[i] == inputStringLower[strLen-i-1]) {
         result = true
      } else {
        result = false
        break
      }
    }
  }
  return result
}

export default Palindrome