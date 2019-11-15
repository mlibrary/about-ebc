import React from "react"

const Video = ({video}) => {
  return (
    <div>
      <h2>{video.heading}</h2>
      <figure dangerouslySetInnerHTML={{ __html: video.embed }} />
      <p>{video.description}</p>
    </div>
  )
}

export default Video