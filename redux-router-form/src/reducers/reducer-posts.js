import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import _Loadash from 'lodash';

/**
 * @param {Object} state the state from redux
 * @param {Object} action the action from redux
 * @returns {Object} Redux object
 */
export default function (state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            return _Loadash.omit(state, action.payload);
        case FETCH_POST:
            return { ...state,
                [action.payload.data.id]: action.payload.data };
        case FETCH_POSTS:
            return _Loadash.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}