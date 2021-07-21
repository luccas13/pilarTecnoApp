import { FETCH_POSTS, POST_POSTS, DEL_POSTS, UPDATE_POSTS } from '../constants';
const initialState = {
    posts: null,
};
export default (state = initialState, action) => {
    if (action.type === FETCH_POSTS) {
        return {
            ...state,
            posts: action.data,
        };
    }
    if (action.type === POST_POSTS) {
        return {
            ...state,
            posts: [...state.posts, {
                userId: 1, title: action.data.title,
                body: action.data.body
            }],
        };
    }
    if (action.type === UPDATE_POSTS) {
        // console.log(`-------Reducer data = ${JSON.stringify(action.data)}`)
        update = state.posts.map((post) => {
            if (post.id == action.data.id) {
                return action.data
            }
            return post
        });
        // console.log('UPDATE = ' + JSON.stringify(update[0]));
        return {
            posts: update.reverse()
        };
    }
    if (action.type === DEL_POSTS) {
        update = state.posts.filter(post => post.id !== action.data.id);
        return {
            posts: update.reverse()
        };
    }
    return { ...state };
};
