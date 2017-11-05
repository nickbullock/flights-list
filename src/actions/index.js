import {createActions} from 'redux-actions'

const actionCreators = createActions({
    SET_CARRIER: carrier => ({carrier})
});

export default actionCreators