import { fromJS } from 'immutable'

export const changePage = (data) => ({
    type: 'CHANGE_PAGE',
    data: fromJS(data)
})