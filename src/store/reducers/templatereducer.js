import { fromJS } from 'immutable'

const defaultState = fromJS({
    currentTemplate: {}     // 添加组件面板 选中
})

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_TEMPLATE':
            return state.set('currentTemplate', action.data);
        default:
            return state;
    }
}

export default reducer