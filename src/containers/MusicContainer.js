import React, {Component} from 'react';
import MusicList from '../components/MusicList';

class MusicContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }
  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'

    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({songs: data.feed.entry}))
      .catch(err => console.error)
  }

  render(){
    return(
      <div>
        <h1>Top 20 Songs</h1>
        <MusicList songs={this.state.songs}/>
      </div>
    )
  }
}
export default MusicContainer;
