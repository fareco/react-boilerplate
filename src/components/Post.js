import React from 'react'
import {
  Link
} from 'react-router-dom'


function Post({ item }) {

<<<<<<< HEAD
=======
function Post({ item }) {
>>>>>>> b0aa1a136a0beb31b1813429e61960e55aa329e9
  return (
      <div>
        <Link to={`/detail/${item.title}`}>{item.title}</Link>
      </div>
  )
}

export default Post
