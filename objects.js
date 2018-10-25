var playlist = new Object ({})

function updatePlaylist(myPlaylist, artistName, songTitle){
  return Object.assign({}, myPlaylist,{[artistName]:songTitle})
}

function removeFromPlaylist(myPlaylist, artistName){
  delete myPlaylist[artistName]
  return myPlaylist
}
