import React from 'react'
import VideoItem from './video_item'

const VideoList = ({onVideoSelect, videos}) => {
  return (
    <ul>
      {videos.map((video) => {
        return <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.etag} />
      })}
    </ul>
  )
}

export default VideoList
