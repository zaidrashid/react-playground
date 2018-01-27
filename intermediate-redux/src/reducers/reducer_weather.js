import { FETCH_WEATHER } from '../actions/index';

/**
 * @param  {obejct} state reducer's state
 * @param  {object} action the global redux state
 * @return {object} The current reducer's state
 */
export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER:
        return [
            action.payload.data,
            ...state
        ];
    default:
        return state;
    }
}
