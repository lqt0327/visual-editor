import { fromJS } from 'immutable'

const defaultState = fromJS({
    pageData: [
        // {
        //     comp: "Banner",
        //     template: "banner1",
        //     link_address: "www.baidu.com",
        //     left_editor: "LeftPanelBanner",
        //     img_address: "https://gw.alipayobjects.com/zos/rmsportal/nKBqduiIsQWrHPVehZrG.png"
        // }
    ]
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'CHANGE_PAGE':
            return state.set('pageData', action.data);
        default:
            return state;
    }
}