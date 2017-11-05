import {createStore} from 'redux'
import reducers from '../reducers'

console.log(">>>", reducers)

export default initialState => {
    return createStore(
        reducers,
        initialState
    );
}