import React from 'react'

function Post({ item }) {
  return (
    <div>
      <a target="_blank" href={item.url}>{item.title}</a>
    </div>
  )
}

export default Post
