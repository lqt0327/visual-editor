import { fromJS } from 'immutable'

export const changePage = (data) => {
    return ({
        type: 'CHANGE_PAGE',
        data: fromJS(data)
    })
}

export const changePid = (data) => {
    return ({
        type: 'CHANGE_PID',
        data: fromJS(data)
    })
}