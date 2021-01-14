import { fromJS } from 'immutable'

const defaultState = fromJS({
    currentPanel: {}
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'changePanel':
            return state.set('currentPanel', action.data);
        default:
            return state;
    }
}