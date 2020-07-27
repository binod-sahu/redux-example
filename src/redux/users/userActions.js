import { FATCH_USER_START, FATCH_USER_SUCCESS, FATCH_USER_FAILURE } from './userTypes'
import axios from 'axios'

export const fatchUserStart = () => {
    return {
        type: FATCH_USER_START
    }
}

export const fatchUserSuccess = users => {
    return {
        type: FATCH_USER_SUCCESS,
        payload: users
    }
}

export const fatchUserFailure = error => {
    return {
        type: FATCH_USER_FAILURE,
        payload: error
    }
}


export const fatchUser = () => {
    return (dispatch) => {
        dispatch(fatchUserStart())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response)
            const users = response.data
            dispatch(fatchUserSuccess(users))
        })
        .catch(error => {
            console.log(error)
            const message = error.message
            dispatch(fatchUserFailure(message))
        })
    }
}
