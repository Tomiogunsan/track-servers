import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
            case 'signup':
                return {errorMessage: '', token: action.payload};
        default:
            return state;
    }
};

const signup =  (dispatch) =>  async ({ email, password }) => {
      try {
        const response = await trackerApi.post("/signup", { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({
            type: 'signup',
            payload: response.data.token
        });

        navigate('TrackList');
        console.log(response.data);
      } catch (err) {
       dispatch({
        type: 'add_error', 
        payload: 'Something went wrong with sign up'
    })
      }
      // make api request to sign up with that email and password

      // if we sign up, modify our state, and say that we are authenticated

      // if signing up fails, we probably need to reflect an error message

      // somewhe
    };


const signin = (dispatch) => {
    return ({email, password}) => {

        try {
            
        } catch (err) {
            dispatch({
                type: 'add_error',
                pay
            })
        }
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
    {token: null, errorMessage: ''}
);