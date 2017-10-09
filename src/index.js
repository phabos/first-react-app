import _ from 'lodash'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YoutubeSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY =  'xxxxxx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surf');

    this.selectVideo = this.selectVideo.bind(this)
  }
  selectVideo(video) {
    this.setState({
      selectedVideo: video
    })
  }
  videoSearch(term) {
    YoutubeSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500)

    const {videos, selectedVideo} = this.state
    return (
      <div>
        <SearchBar onSearchTerm={term => videoSearch(term)} />
        <VideoDetail video={selectedVideo} />
        <VideoList
          onVideoSelect={this.selectVideo}
          videos={videos} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />
  , document.querySelector('.container'));
