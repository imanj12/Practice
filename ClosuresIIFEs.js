// combines closure and IIFE
var Counter = (function keepTrack() {
   let counter = 0

   return {
      current: function() {
         return counter
      },
      addOne: function() {
         counter++
         return counter
      },
      reset: function() {
         counter = 0
         return counter
      }
   }
})()

console.log(Counter.current())
console.log(Counter.addOne())
console.log(Counter.addOne())
console.log(Counter.reset())


