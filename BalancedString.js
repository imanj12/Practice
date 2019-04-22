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
   if (stack.length === 0) {
      return true
   } else {
      return false
   }
}  

let string = '((()'
let openChars = ['(', '{', '[']
let closeChars = [')', '}', ']']
console.log(balancedString(string, openChars, closeChars))
