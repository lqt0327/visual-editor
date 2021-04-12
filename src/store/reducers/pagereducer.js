import { fromJS } from 'immutable'

// 预览页面的 页面数据
const defaultState = fromJS({
    pageData: [],
    pid: 0
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'CHANGE_PAGE':
            return state.set('pageData', action.data);
        case 'CHANGE_PID':
            return state.set('pid', action.data)
        default:
            return state;
    }
}