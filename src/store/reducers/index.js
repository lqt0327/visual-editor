import { combineReducers } from 'redux-immutable'
import panelReducer from './panelreducer'
import templateReducer from './templatereducer'

export default combineReducers({
    panels: panelReducer,
    template: templateReducer
})