import request from 'axios';

export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";
export const RESET = "counter/RESET";

export const increment = () => {
  return { type: INCREMENT }
}

export const decrement = () => {
  return { type: DECREMENT }
}

export const reset = () => {
  return { type: RESET }
}


export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (json) => {
  return {
    type: RECEIVE_POSTS,
    posts: json.data.children.map(child => child.data)
  }
}

export const fetchPosts = () => {
  return async dispatch => {
    dispatch(requestPosts())
    try {
      let json = await request.get(`https://www.reddit.com/r/reactjs.json`)
        .then(response => response.data)
      dispatch(receivePosts(json))
    } catch (error) {
      console.log(error)
    }
  }
}