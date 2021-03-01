import { fromJS } from 'immutable'

const defaultState = fromJS({
    currentTemplate: ''
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_TEMPLATE':
            return state.set('currentTemplate', action.data);
        default:
            return state;
    }
}