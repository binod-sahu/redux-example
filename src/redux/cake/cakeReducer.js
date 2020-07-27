import { BUY_CAKE } from './cakeTypes'

const initialState = {
    noofCakes : 10
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE : 
            return {
                ...state,
                noofCakes : state.noofCakes - 1
            }
        default: return state
    }
}

export default cakeReducer;