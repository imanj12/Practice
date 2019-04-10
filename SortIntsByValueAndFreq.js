// sort integers in ascending order, first by value, then by frequency
// ex. input: [4,5,6,5,4,3]
// output: [3,6,4,4,5,5]

function customSort(arr) {
   let hist = {}
   let sorted = []
   arr.forEach(el => {
      hist[el] ? hist[el]++ : hist[el] = 1
   })
   Object.keys(hist).sort((a,b) => {
      return hist[a] - hist[b]
   })
   .forEach(key => {
      for (let i=0;i<hist[key];i++) {
         sorted.push(key)
      }
   })
   return sorted
}

let arr = [4,5,6,7,5,4,3]
console.log(customSort(arr))
