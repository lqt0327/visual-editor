import { fromJS } from 'immutable'

const defaultState = fromJS({
    currentPanel: 'page'
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'CHANGE_BANNER_STATIC':
            return state.set('currentPanel', action.data);
        case 'CHANGE_BANNER_DYNAMIC':
            return state.set('currentPanel', action.data);
        default:
            return state;
    }
}