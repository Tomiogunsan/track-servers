import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return ({email, password}) => {
// make api request to sign up with that email and password

// if
    }
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {},
    {isSignedIn: false}
);