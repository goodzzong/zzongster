import post from '../fixtures/post'

export const initialState = {
  mainPosts: [post],
};

const ADD_POST = "ADD_POST";

export const addPost = (post) => ({
  type: ADD_POST,
  payload: {
    post
  }
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [action.payload.post, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
