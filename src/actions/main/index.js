export function setLoading(isLoading = false) {
    return {
        type: 'SET_LOADING',
        loading: isLoading,
    };
}

export function setAuthenticate(isAuthenticated = false) {
    return {
        type: 'SET_AUTHENTICATE',
        isAuthenticated,
    };
}

export function resetStore() {
    return {
        type: 'RESET_STORE',
    };
}

export function setToken(token = null) {
    window.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return {
        type: 'SET_TOKEN',
        token: token
    };
}

export function removeToken() {
    window.axios.defaults.headers.common['Authorization'] = '';

    return {
        type: 'REMOVE_TOKEN',
    };
}

/*export function fetchUserProfileData() {
    return function (dispatch) {
        apiGetProfile().then((result) => {
            const success = get(result, 'data.success', false);
            if (!success) {
                dispatch(logOut());
                return;
            }

            const userData = get(result, 'data.data', {});

            dispatch(setAuthenticate(true));
            dispatch(getUserProfileData(userData));

            //if (userData.role !== "Кандидат") {
            if (get(userData, 'role_id') !== "4") {
                dispatch(setModalErrors(['Доступ запрещен'], true));
            }
        });
    }
}*/

/*export function logOut() {
    return function (dispatch) {
        dispatch(removeToken());

        if (process.env.IS_SINGLE_SPA === true) {
            window.dispatchEvent(new CustomEvent("unloadApp", {'detail': {app: "candidate", type: "reload"}}));
            return;
        }

        dispatch(resetStore());
        dispatch(setAuthenticate(false));
    }
}*/