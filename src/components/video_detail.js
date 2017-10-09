import React from 'react'

const VideoDetail = ({video}) => {
  if(video === null) {
    return (
      <div>Loading...</div>
    )
  }

  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`
  return (
    <div>
      <iframe src={url} /><br />
      {video.snippet.title}<br />
      {video.snippet.description}
    </div>
  )
}

export default VideoDetail
