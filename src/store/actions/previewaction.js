import { fromJS } from 'immutable'

export const setShowAdd = (data) => {
  return ({
    type: 'SET_SHOW_ADD',
    data: fromJS(data)
  })
}