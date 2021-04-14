import { fromJS } from 'immutable'

const defaultState = fromJS({
    pageData: [],   // 右侧预览 页面数据
    pid: 0,     // 当前选中 页面 id
    pTitle: '',     // 用于 导航栏 中的 标题
    pUpdate: 0  // 用于 左侧页面列表 重渲染
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'CHANGE_PAGE':
            return state.set('pageData', action.data);
        case 'CHANGE_PID':
            return state.set('pid', action.data);
        case 'CHANGE_PAGE_TITLE':
            return state.set('pTitle', action.data);
        case 'UPDATE_PAGE':
            return state.set('pUpdate', action.data);
        default:
            return state;
    }
}