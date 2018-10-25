var playlist = new Object ({StillWoozy: "Goodie Bag",
                            Soko: "Diabolo Menthe",
                            NewOrder: "True Faith"})

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist,{[artistName]:songTitle})
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
