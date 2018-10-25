var playlist = new Object ({StillWoozy: "Goodie Bag",
                            Soko: "Diabolo Menthe",
                            NewOrder: "True Faith"})

function updatePlaylist(myPlaylist, artistName, songTitle){
  return Object.assign({}, myPlaylist,{[artistName]:songTitle})
}

function removeFromPlaylist(myPlaylist, artistName){
  delete myPlaylist[artistName]
  return myPlaylist
}
