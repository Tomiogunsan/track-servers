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

// if we sign up, modify our state, and say that we are authenticated

// if sib
    }
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {},
    {isSignedIn: false}
);