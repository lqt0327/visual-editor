import { combineReducers } from 'redux-immutable'
import panelReducer from './panelreducer'
import activeTipReducer from './activetipreducer'

export default combineReducers({
    panels: panelReducer,
    activeTip: activeTipReducer
})