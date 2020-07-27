import { FATCH_USER_START, FATCH_USER_SUCCESS, FATCH_USER_FAILURE } from './userTypes'

const initialState = {
    isLoading: false,
    data: [],
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FATCH_USER_START: 
            return {
                ...state,
                isLoading: true
            }
        case FATCH_USER_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case FATCH_USER_FAILURE: 
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: return state
    }
}

export default userReducer;