import React from 'react'

const VideoItem = ({onVideoSelect, video}) => {
  return (
    <li onClick={() => onVideoSelect(video)}>
      <img src={video.snippet.thumbnails.default.url} /><br />
      {video.snippet.title}
      <span>{video.id.videoId}</span>
    </li>
  )
}

export default VideoItem
