import { combineReducers } from 'redux';
import { SET_MODAL_CONTENT } from './actions';

export function modalContent(state = null, action) {
    if(action.type === SET_MODAL_CONTENT) {
        return action.modalContent
    }

    return state;
}

let reducers = combineReducers({
    modalContent
})

export default reducers;