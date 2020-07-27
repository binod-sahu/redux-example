import { BUY_ICECREAM } from './icecreamTypes'

const initialState = {
    noofIceCream : 20
}

const icecreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM : 
            return {
                ...state,
                noofIceCream : state.noofIceCream - 1
            }
        default: return state
    }
}

export default icecreamReducer;