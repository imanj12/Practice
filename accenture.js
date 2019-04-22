function printFirstLast(n) {
   if (n % 3 === 0 && n % 5 === 0) {
      console.log('Iman Jawad')
   } else if (n % 3 === 0) {
      console.log('Iman')
   } else if (n % 5 === 0) {
      console.log('Jawad')
   } else {
      console.log(n)
   }
}

function printPrime(n) {
   let array = []
   for (let i = 1; i < n; i++) {
      if (isPrime(i)) {
         array.push(i)
      }
   }
   
   console.log(array)
   
   function isPrime(num) {
      for (let i = 2; i < num; i++) {
         if (num % i === 0) return false
      }
      return num > 1
   }
}

printPrime(10)
