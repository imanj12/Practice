// Given the index of the song that is currently playing... 
// determine the minimum number of button presses needed to get to that song
// can go backwards or forwards

// parameters:
// songs: []
// k: index of current song
// q name of song want to play next

function playlist (songs, k, q) {
   let targetIndex = songs.indexOf(q)
   let forward, backward
   if (targetIndex < k) {
      forward = songs.length - k + targetIndex
      backward = k - targetIndex
   } else if (targetIndex > k) {
      forward = targetIndex - k
      backward = k + songs.length - targetIndex
   }
   if (forward >= backward) {
      return backward
   } else {
      return forward
   }
}

let songs = ['time', 'money', 'heaven', 'jungle', 'teardrop']
console.log(playlist(songs, 0, 'teardrop'))
