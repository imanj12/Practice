function balancedString (str, openers, closers) {
let stack = []

for(let i=0;i<str.length;i++) {
   let char = str.charAt(i)
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

let string = '(a{a{aa]}))'
let openChars = ['(', '{', '[']
let closeChars = [')', '}', ']']
console.log(balancedString(string, openChars, closeChars))
