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
   let primes = []
   for (let i = 2; i < n; i++) {
      if (isPrime(i)) {
         primes.push(i)
      }
   }
   
   console.log(primes)
   
   function isPrime(num) {
      if (num === 2 || num === 3) return true
      if (num < 2 || num % 2 === 0) return false
      for (let i = 3; i <= Math.sqrt(num); i += 2) {
         if (num % i === 0) return false
      }
      return true
   }
}

