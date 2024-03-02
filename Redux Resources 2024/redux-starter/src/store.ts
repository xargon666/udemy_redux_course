import {legacy_createStore as createStore} from 'redux'
import {type Props} from './reducer'
import {type Action} from './reducer'
import {type State} from './reducer'
import {reducer} from './reducer'
const store = createStore(reducer)

export default store;

// Root Reducer is a combination of all reducers
