import { combineReducers } from 'redux-immutable'
import panelReducer from './panelreducer'

export default combineReducers({
    panels: panelReducer
})