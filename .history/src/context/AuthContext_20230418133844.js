import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

const signup = (dis)

export const {Provider, Context} = createDataContext(
    authReducer,
    {},
    {isSignedIn: false}
);