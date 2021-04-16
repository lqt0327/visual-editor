import { combineReducers } from 'redux-immutable'
import panelReducer from './panelreducer'
import templateReducer from './templatereducer'
import pagereducer from './pagereducer'

export default combineReducers({
    panels: panelReducer,
    template: templateReducer,
    page: pagereducer
})