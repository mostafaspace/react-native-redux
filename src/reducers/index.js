import {combineReducers} from 'redux'

import CounterReducer from './counterReducer'
import helloReducer from './helloReducer'

export default combineReducers({
    counter: CounterReducer,
    hello: helloReducer
})

