import { intialState } from "../reducer"
const login_success = (state: intialState, action: any) => {

    return {...state,
        token: action.token,
        isAuthenticated: true,
        loading: false

    }
}
const login_fail = (state: intialState, action: any) => {
    return {...state,
        error: action.error,
        loading: false

    }
}

const logout = (state: intialState, action: any) => {
    return {...state, 
        token: null,
        isAuthenticated: false,
    };
}


export {login_success, login_fail, logout}