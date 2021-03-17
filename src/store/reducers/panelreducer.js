import { fromJS } from 'immutable'

const defaultState = fromJS({
    currentPanel: 'page',
    currentId: '',
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'CHANGE_PANEL':
            return state.set('currentPanel', action.data.currentPanel).set('currentId', action.data.currentId);
        default:
            return state;
    }
}