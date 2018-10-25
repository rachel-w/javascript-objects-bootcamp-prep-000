var playlist = {
  voidz:"Permanent High School",
  soko: "Diabolo Menthe",
  billyidol: "Dancing With Myself"
}

function updatePlaylist(playlist, artistName, songTitle){
  //Object.assign({}, playlist, {[artistName]:songTitle})
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName){
  
}