import React from 'react'
import {
  Link
} from 'react-router-dom'


function Post({ item }) {
  return (
    <div>
      <Link to={`/detail/${item.title}`}>{item.title}</Link>
    </div>
  )
}

export default Post
