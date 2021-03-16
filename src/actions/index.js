import { 
    SET_RECENT_POSTS,
    SET_RESULTS_POSTS
} from "./types";
import axios from "axios";

export function fetchRecentPosts() {
    return function(dispatch) {
      axios.get('https://api.dailysmarty.com/posts')
        .then(response => {
            console.log(response.data);
            dispatch({
                type:SET_RECENT_POSTS,
                playload: response.data.posts
            })
        }); 
    }
}

export function fetchPostsWithQuery(query, callback) {
    return function(dispatch) {
      axios.get(`https://api.dailysmarty.com/searcg?q=${query}`)
        .then(response => {
            dispatch({
                type:SET_RESULTS_POSTS,
                playload: response.data.posts
            })
            if (callback) {callback()}
        }); 
    }
}