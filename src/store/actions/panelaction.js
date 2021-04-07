import { fromJS } from 'immutable'

export const changePanel = (data) => ({
    type: 'CHANGE_PANEL',
    data: fromJS(data)
})