import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer';
import icecreamReducer from './iceCream/iceCreamReducer';
import userReducer from './users/userReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: icecreamReducer,
    user: userReducer
})

export default rootReducer