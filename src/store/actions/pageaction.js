import { fromJS } from 'immutable'

export const changePage = (data) => {
    return ({
        type: 'CHANGE_PAGE',
        data: fromJS(data)
    })
}