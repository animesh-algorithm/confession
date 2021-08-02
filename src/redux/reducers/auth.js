import { SIGNIN_ERROR, SIGNIN_SUCCESS, SIGNUP_ERROR, SIGNUP_SUCCESS } from "../constants/auth"

const initState = {
  auth: {
    authError: null
  }
}

export default (state=initState, action) => {
    switch (action.type) {
        case SIGNIN_SUCCESS:
            console.log('Signin Success')
            return {
                ...state,
                authError: null
            }
        case SIGNIN_ERROR:
            console.log('Signin Error')
            return {
                ...state,
                authError: action.error
            }
        case SIGNUP_SUCCESS:
            console.log('Signup Success')
            return {
                ...state,
                authError: null
            }
        case SIGNUP_ERROR:
            console.log('Signup Error')
            return {
                ...state,
                authError: action.error
            }
        default:
            return state
    }
}