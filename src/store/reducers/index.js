import { combineReducers } from 'redux-immutable'
import panelReducer from './panelreducer'
import activeTipReducer from './activetipreducer'
import templateReducer from './templatereducer'

export default combineReducers({
    panels: panelReducer,
    activeTip: activeTipReducer,
    template: templateReducer
})