function balancedString (str) {
   let stack = []
   let openers = ['(', '{', '[']
   let closers = [')', '}', ']']
   
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
 console.log(balancedString(string))
