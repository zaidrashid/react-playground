import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POSTS = 'create_posts';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=9989';

/**
 * @returns {Object} Redux object
 */
export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        payload: request,
        type: FETCH_POSTS
    };
}

/**
 * @param {Object} values The value from the form
 * @param {Function} callback callback function to be called after post execute
 * @returns {Object} Redux object
 */
export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values).
    then(() => {
        callback();
    });

    return {
        payload: request,
        type: CREATE_POSTS
    };
}

/**
 * @param {Number} id The post's id
 * @returns {Object} Post object
 */
export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        payload: request,
        type: FETCH_POST
    };
}

/**
 * @param {Number} id The post's id
 * @param {Function} callback callback function to be called after delete
 * @returns {Object} Post object
 */
export function deletePost(id, callback) {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).
    then(() => callback());

    return {
        payload: id,
        type: DELETE_POST
    };
}