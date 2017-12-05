import request from 'axios';

export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';
export const RESET = 'counter/RESET';

export const increment = () => ({ type: INCREMENT });

export const decrement = () => ({ type: DECREMENT });

export const reset = () => ({ type: RESET });


export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const requestPosts = () => ({
  type: REQUEST_POSTS
});

export const receivePosts = json => ({
  type: RECEIVE_POSTS,
  posts: json.data.children.map(child => child.data)
});

export const fetchPosts = () => async (dispatch) => {
  dispatch(requestPosts());
  try {
    const json = await request.get('https://www.reddit.com/r/reactjs.json')
      .then(response => response.data);
    dispatch(receivePosts(json));
  } catch (error) {
    console.log(error);
  }
};
