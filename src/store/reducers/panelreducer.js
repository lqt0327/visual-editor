import { fromJS } from 'immutable'

// 左侧面板 指定当前操作的面板是哪个
const defaultState = fromJS({
    currentPanel: ['page']
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'CHANGE_PANEL':
            return state.set('currentPanel', action.data);
        default:
            return state;
    }
}