import { fromJS } from 'immutable'

// 左侧面板 指定当前操作的面板是哪个
const defaultState = fromJS({
    currentPanel: ['page'],
    comp_i: 0   // 预览页面 选中组件索引
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'CHANGE_PANEL':
            return state.set('currentPanel', action.data);
        case 'CHANGE_COMP_I':
            return state.set('comp_i',action.data);
        default:
            return state;
    }
}