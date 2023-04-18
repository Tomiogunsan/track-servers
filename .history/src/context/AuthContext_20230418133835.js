import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

const

export const {Provider, Context} = createDataContext(
    authReducer,
    {},
    {isSignedIn: false}
);