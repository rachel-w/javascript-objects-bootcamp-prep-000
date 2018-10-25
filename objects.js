var playlist = new Object ({StillWoozy: "Goodie Bag",
                            Soko: "Diabolo Menthe",
                            NewOrder: "True Faith"})

function updatePlaylist(myPlaylist, artistName, songTitle){
  return Object.assign({}, myPlaylist,{[artistName]:songTitle})
}

updatePlaylist(playlist, "Voidz", "Permanent High School")

function removeFromPlaylist(myPlaylist, artistName){
  delete myPlaylist[artistName]
  return myPlaylist
}

removeFromPlaylist(playlist,"Soko")