import { FETCH_POSTS } from '../actions';
import _Loadash from 'lodash';


/**
 * @param {Object} state the state from redux
 * @param {Object} action the action from redux
 * @returns {Object} Redux object
 */
export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _Loadash.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}