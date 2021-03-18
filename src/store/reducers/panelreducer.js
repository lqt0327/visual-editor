import { fromJS } from 'immutable'

const defaultState = fromJS({
    currentPanel: 'page'
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'CHANGE_PANEL':
            return state.set('currentPanel', action.data);
        default:
            return state;
    }
}