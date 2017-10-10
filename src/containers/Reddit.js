import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

import Post from '../components/Post'

const Reddit = ({ isFetching, posts, getPost }) => (
  <div>
    <h1>isFetching ?: {isFetching.toString()}</h1>
    <button onClick={() => getPost()} >get post</button>
    <div>
      {
        posts.map(item => (<Post key={item.id} item={item} />))
      }
    </div>

  </div>
)


const mapStateToProps = (state) => {
  const { isFetching, posts } = state.reddit
  return {
    isFetching,
    posts
  }
}

const mapDispatchToProps = dispatch => ({
  getPost: () => {
    dispatch(fetchPosts())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Reddit)
