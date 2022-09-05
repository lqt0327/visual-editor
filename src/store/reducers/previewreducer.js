import { fromJS } from 'immutable'

const defaultState = fromJS({
  showAdd: ''
})

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'SET_SHOW_ADD':
            return state.set('showAdd', action.data);
        default:
            return state;
    }
}

export default reducer