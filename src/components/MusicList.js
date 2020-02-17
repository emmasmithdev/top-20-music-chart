import React from 'react';

const MusicList= (props) => {

  const list = props.songs.entry.map(song => {
    return(
      <h2>{song["im:name"].label}</h2>
    )
  })

  return(
    <div>

    </div>
  )
}
export default MusicList;
