import { fromJS } from 'immutable'

export const changePanel = (data) => ({
    type: 'CHANGE_PANEL',
    data: fromJS(data)
})

export const changeCompI = (data) => ({
    type: 'CHANGE_COMP_I',
    data: fromJS(data)
})