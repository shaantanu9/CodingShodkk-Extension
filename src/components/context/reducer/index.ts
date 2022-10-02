import {LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from '../types';
import {login_success, login_fail, logout} from '../creator'

export type intialState = {
token: string | null;
isAuthenticated: boolean;
loading: boolean;
error: any;
}
const reducer = (state: intialState, action: any) => {

    switch (action.type) {
        case LOGIN_SUCCESS:
            return login_success(state, action);
        case LOGIN_FAILURE:
            return login_fail(state, action);
        case LOGOUT:
            return logout(state, action);
        default:
            return state;
    }

}

export default reducer;