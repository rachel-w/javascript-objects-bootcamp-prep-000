var artistName, songTitle
var playlist = new Object ({[artistName]:songTitle})

function updatePlaylist(myPlaylist, artistName, songTitle){
  return Object.assign({}, myPlaylist,{[artistName]:songTitle})
}

function removeFromPlaylist(myPlaylist, artistName){
  delete myPlaylist[artistName]
  return myPlaylist
}
