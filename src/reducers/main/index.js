const tokenName = 'lytko-updates-token';
const initialState = {
    isLoading: false,
    isAuthenticated: false,
    token: localStorage.getItem(tokenName) || undefined,
    userData: {},
}

export default function main(state = initialState, action) {
    switch (action.type) {
        case "SET_LOADING":
            return Object.assign({}, state, {isLoading: action.isLoading});
        case "SET_TOKEN":
            localStorage.setItem(tokenName, action.token || initialState.token)
            return Object.assign({}, state, {
                token: action.token || initialState.token,
            });
        case "REMOVE_TOKEN":
            localStorage.removeItem(tokenName);
            return Object.assign({}, state, {
                token: undefined,
            });
        case "SET_AUTHENTICATE":
            return Object.assign({}, state, {
                isAuth: action.isAuthenticated,
            });
        case "SET_USER_DATA":
            return Object.assign({}, state, {
                userData: {
                    ...state.userData,
                    ...action.data,
                },
            });
        case "RESET_STORE":
            return Object.assign({}, initialState, {
                token: localStorage.getItem(tokenName) || undefined,
            });
        default:
            return state;
    }
}
