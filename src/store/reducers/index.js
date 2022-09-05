import { combineReducers } from 'redux-immutable'
import panelReducer from './panelreducer'
import templateReducer from './templatereducer'
import pagereducer from './pagereducer'
import userreducer from './userreducer'
import previewreducer from './previewreducer'

export default combineReducers({
    panels: panelReducer,
    template: templateReducer,
    page: pagereducer,
    user: userreducer,
    preview: previewreducer
})