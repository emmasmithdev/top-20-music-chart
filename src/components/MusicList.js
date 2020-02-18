import React from 'react';

const MusicList= (props) => {

const songs = props.songs.map(song => {
  return(
    <h2>{song.title.label}</h2>
  )
})

  return(
    <div>
      {songs}
    </div>
  )
}
export default MusicList;
