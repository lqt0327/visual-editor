import { fromJS } from 'immutable'

const defaultState = fromJS({
    currentTemplate: ''     // 左侧面板 添加组件中 点击模版 即为该值
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_TEMPLATE':
            return state.set('currentTemplate', action.data);
        default:
            return state;
    }
}