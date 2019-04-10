function balancedString (str, openers, closers) {
let stack = []

for(let char of str) {
   if (openers.includes(char)) {
      stack.push(char)
   } else if (closers.includes(char)) {
      if (openers.indexOf(stack.pop()) !== closers.indexOf(char)) {
      return false
      }
   }
}
return true
}  

let string = '()[aa]{1[]-}'
let openChars = ['(', '{', '[']
let closeChars = [')', '}', ']']
console.log(balancedString(string, openChars, closeChars))
