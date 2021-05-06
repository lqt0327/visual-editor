import { fromJS } from 'immutable'

// 左侧面板 指定当前操作的面板是哪个
const defaultState = fromJS({
    uid: null
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'SET_UID':
            return state.set('uid', action.data);
        default:
            return state;
    }
}