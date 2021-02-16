import { fromJS } from 'immutable'

const defaultState = fromJS({
    currentTop: 0,
    currentHeight: 0
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'GET_TOP':
            return state.set('currentTop', action.data);
        case 'GET_HEIGHT':
            return state.set('currentHeight', action.data);
        default:
            return state;
    }
}