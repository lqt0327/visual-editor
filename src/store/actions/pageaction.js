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

export const changePageTitle = (data) => {
    return ({
        type: 'CHANGE_PAGE_TITLE',
        data: fromJS(data)
    })
}

export const updatePage = (data) => {
    console.log(data,'testestt')
    return ({
        type: 'UPDATE_PAGE',
        data: fromJS(data)
    })
}