function printPrime(n) {
   for (let i = 2; i < n; i++) {
      if (isPrime(i)) {
         console.log(i)
      }
   }   
}

// helper method
function isPrime(num) {
   if (num === 2 || num === 3) return true
   if (num < 2 || num % 2 === 0) return false
   for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false
   }
   return true
}

printPrime(30)
