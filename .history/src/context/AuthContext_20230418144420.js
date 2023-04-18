import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return ({email, password}) => {
        try{
            const response = await trackerApi.post
        }catch(err){

        }
// make api request to sign up with that email and password

// if we sign up, modify our state, and say that we are authenticated

// if signing up fails, we probably need to reflect an error message

// somewhe
    }
}

const signin = (dispatch) => {
    return ({email, password}) => {
// Try to sign in
// Handle sucess by updating state
// Handle failure by showing error message(somehow)
    };
}

const signout = () => {
    return () => {
        // somehow sign out
    }
}
export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup},
    {isSignedIn: false}
);